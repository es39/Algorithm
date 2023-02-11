function solution(s) {
    if(s.length === 4 || s.length === 6){
        let str = [...s].filter(el => !isNaN(el))
        if(str.length === s.length){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}