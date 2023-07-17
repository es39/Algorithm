function solution(arr1, arr2) {
    if(arr1.length < arr2.length) return -1
    else if(arr1.length > arr2.length) return 1
    else {
        let arr1Sum = arr1.reduce((acc, cur) => acc+cur)
        let arr2Sum = arr2.reduce((acc, cur) => acc+cur)
        if(arr1Sum < arr2Sum) return -1
        else if(arr1Sum > arr2Sum) return 1
        else return 0
    }
}