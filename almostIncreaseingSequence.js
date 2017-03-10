function almostIncreasingSequence(sequence) {
    var count = 0;
    var myVal;
    for(var i = 0; i < sequence.length; i++){
        if( sequence[i] <= sequence[i -1]){
           if(sequence[i+1] <= sequence[i-1]){
            myVal = i -1
           } else{
            myVal = i
           }
            count ++
        }
    }
    if(count > 1){
        return false
    }
    sequence = sequence.slice(0, myVal).concat(sequence.slice(myVal +1))
    for(var j =0 ; j < sequence.length; j++){
        if(sequence[j] >= sequence[j+1]){
            return false
        }
    }
    return true
}
