function solution(id_pw, db) {
    let result = ''
    db.map(el => {
        if(id_pw[0] === el[0] && id_pw[1] === el[1]){
            result = 'login'
        } else if(id_pw[0] === el[0] && id_pw[1] !== el[1]){
            result = 'wrong pw'
        } else if(id_pw[0] !== el[0] && id_pw[1] !== el[1]){
            result = 'fail'
        }
    })
    return result
}