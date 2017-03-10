function matrixElementsSum(matrix) {
    var price = 0
    for(var i = 0; i < matrix.length; i++){
        for(var j =0 ; j < matrix[0].length; j++){
            var val = matrix[i][j]
            if(val !== 0  val !== 'x'){
                price += val
            } else if(val === 0){
                var x = i
                while( x < matrix.length && matrix[x][j] !== 'x'){
                    matrix[x][j] = 'x'
                    x++
                }
            }
        }
    }
    console.log(matrix)
    return price
}
