function solution(arr) {
    let result = 1;
    for(let i=0; i<arr.length; i++){
        result = lcm(arr[i], result)
    }
    return result
}

function gcd(a, b) {
    while(b > 0){
        let r = b;
        b = a % b;
        a = r
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}