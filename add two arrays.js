// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

total = (arr1, arr2) => {
    let total = 0;
    for(i=0;i<arr1.length;i++){
        total = total + arr1[i];
        }
    for(j=0;j<arr2.length;j++){
        total = total + arr2[j];
    }
    return total
}
