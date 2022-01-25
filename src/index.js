
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    if (matrix.length == 1) return matrix;
    let index;
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        index = matrix.indexOf(element);
        if (index % 2 != 0) {
            element.reverse( (a, b) => a - b );
        }
    }
    matrix.forEach(element => {
        element.forEach(elem => {
            arr.push(elem);
        });
    });
    return arr;
}
