function solution(myString) {
    let result = []
    myString = myString.split('x')
    for(let i=0; i<myString.length; i++){
        if(myString[i] !== '') result.push(myString[i])
    }
    return result.sort()
}