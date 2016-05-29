(function(global) {

    function createGrid(x, y) {
        return Array.apply(null, Array(y)).map(function() {
            return Array.apply(null, Array(x)).map(function () {
                return Math.random() < 0.2;
            });
        });
    }

    function gridMap(grid, mapper) {
        return grid.reduce(function(newGrid, row, y) {
            return newGrid.concat([row.reduce(function(newRow, cell, x) {
                return newRow.concat(mapper(cell, x, y));
            }, [])]);
        }, []);
    }

    function toggleCell(grid, targetX, targetY) {
        return gridMap(grid, function(cell, x, y) {
            return (x === targetX && y === targetY) ? !cell : cell;
        });
    }

    function countNeighbours(grid, x, y) {
        var locations = [
            [x - 1, y + 1],
            [x - 1, y],
            [x - 1, y - 1],
            [x, y + 1],
            [x, y - 1],
            [x + 1, y + 1],
            [x + 1, y],
            [x + 1, y - 1]
        ];

        return locations.reduce(function(count, location) {
            if (grid[location[1]] && grid[location[1]][location[0]]) {
                return count + 1;
            }

            return count;
        }, 0);
    }

    function tick(grid) {
        return gridMap(grid, function(cell, x, y) {
            var neighbours = countNeighbours(grid, x, y);
            if (neighbours === 3) {
                return true;
            }
            else if (cell && neighbours === 2) {
                return true;
            }

            return false;
        });
    }
    
    global.gameOfLifeLogic = {
        createGrid: createGrid,
        toggleCell: toggleCell,
        tick: tick
    };

})(typeof window === 'undefined' ? {} : window);