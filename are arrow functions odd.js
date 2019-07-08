// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

odds = (arr) => {
    answer = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 ==! 0){
            answer.push(arr[i])
        }
    }
    return answer
}
