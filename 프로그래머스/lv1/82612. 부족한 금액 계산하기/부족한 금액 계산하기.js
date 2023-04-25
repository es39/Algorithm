function solution(price, money, count) {
    // 1. price : 이용 금액
    // 2. money : 사람이 가지고 있는 금액
    // 3. count : 타고싶은 횟수
    // 4. result : 타고싶은 횟수로 금액 계산했을 때 현재 가지고 있는 금액과의 차이 
    let total = 0;
    for(let i=1; i<=count; i++){
        total += price * i
    }
    if(total <= money) return 0
    else return total - money
}