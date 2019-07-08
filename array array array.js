// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

score = (ex) => {
    let value1 = +ex[0]
    let value2 = +ex[1]
    answer = []
    if(value1 ==! NaN){
        if(value2 ==! NaN){
            answer.push(ex)
            answer.push(ex)
        }else{for(i=0;i<value1;i++){
            answer.push(ex)
            }
        }
    }else{for(i=0;i<value2;i++){
        answer.push(ex)
    }}
    return answer
}

console.log(score(['a',5]));
