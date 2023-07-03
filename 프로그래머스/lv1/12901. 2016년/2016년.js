function solution(a, b) {
    // let week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    // let month = a;
    // let day = b;
    return new Date(2016, a-1, b).toString().slice(0, 3).toUpperCase();
}