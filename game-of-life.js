(function() {
    
    var logic = window.gameOfLifeLogic;
    var ui = window.gameOfLifeUi;
    var timer = null;
    
    function start() {
        if(timer) {
            window.clearInterval(timer);
            timer = null;
        }
        
        if (!window.matchMedia || !window.matchMedia('(min-width: 55em)').matches) {
            return false;
        }
        
        var canvas = document.getElementsByClassName('game-of-life')[0];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        var size = ui.calculateGridDimensions(canvas);
        var grid = logic.createGrid(size[0], size[1]);
        
        function tick() {
            grid = logic.tick(grid);
            ui.draw(canvas, grid);
        }
        
        ui.draw(canvas, grid);
        window.addEventListener('resize', start);
        timer = window.setInterval(tick, 1000);
    }
    
    function addEvents() {
        var canvas = document.getElementsByClassName('game-of-life')[0];
        canvas.addEventListener('click', function () {
            canvas.classList.toggle('game-of-life-focus');
        });
    }
    
    addEvents();
    start();
    
})();
