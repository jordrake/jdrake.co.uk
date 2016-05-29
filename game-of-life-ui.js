(function(global) {
    
    var CELL_SIZE = 25; 

    function calculateGridDimensions(canvas) {
        return [
            Math.ceil(canvas.width / CELL_SIZE) + 1,
            Math.ceil(canvas.height / CELL_SIZE) + 1
        ];
    }

    function draw(canvas, grid) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'grey';

        grid.forEach(function(row, y) {
            row.forEach(function(cell, x) {
                if(cell) {
                    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                }
            });
        });
    }

    global.gameOfLifeUi = {
        draw: draw,
        calculateGridDimensions: calculateGridDimensions
    };

})(typeof window === 'undefined' ? {} : window);