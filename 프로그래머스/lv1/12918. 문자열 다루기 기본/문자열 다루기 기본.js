// function solution1(s) {
//     if(s.length === 4 || s.length === 6){
//         let str = [...s].filter(el => !isNaN(el))
//         if(str.length === s.length){
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return false
//     }
// }

function solution(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}