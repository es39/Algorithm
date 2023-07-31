function solution(a, b) {
    let x = 0;
    let y = 0;
    x = Number(String(a) + String(b))
    y = 2 * a * b
    return Math.max(x, y)
}