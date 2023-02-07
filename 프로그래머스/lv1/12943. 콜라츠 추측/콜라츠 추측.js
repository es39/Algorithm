function solution(num) {
    let count = 0;
    if (num === 1) return 0
    while(num > 1){
        if(num%2 === 0){
            num /= 2 
            count ++;
        } else {
            num = num * 3 + 1
            count ++;
        }
        if(num === 1) break;
    }
    if(count >= 500) return -1
    return count
}