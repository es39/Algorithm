function solution(order) {
    let result = 0
    for(let i=0; i<order.length; i++){
        if(order[i] === 'iceamericano' || order[i] === 'americanoice' || order[i] === 'hotamericano' || order[i] === 'americanohot' || order[i] === 'americano' || order[i] === 'anything') result += 4500
        else result += 5000
    }
    return result
}