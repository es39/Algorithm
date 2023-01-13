function solution(n)
{
    let numArr = n.toString().split('')
    let newArr = []
    for(let i=0; i<numArr.length; i++){
        newArr.push(Number(numArr[i]))
    }
    return newArr.reduce((acc, cur) => acc+cur)
}