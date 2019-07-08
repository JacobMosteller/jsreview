// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

agediff = (numbers) => {
    var largest = numbers[0];
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++){
        var temp = numbers[i];
        if (temp > largest)
        {
            largest = numbers[i];
        }
        if (temp < smallest)
        {
            smallest = numbers[i];
        }
    }
    let diff = [largest,smallest,largest-smallest]
    return diff

}
