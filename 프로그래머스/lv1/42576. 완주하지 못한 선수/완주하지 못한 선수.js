function solution(participant, completion) {
    let p = participant.sort()
    let c = completion.sort()
    let result = "";
    for(let i=0; i<p.length; i++){
        if(p[i] !== c[i]) {
            result = p[i]
            break;
        }
    }
    return result
}
