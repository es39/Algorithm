function solution(dots) {
    let x_min = Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0])
    let x_max = Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0])
    let y_min = Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1])
    let y_max = Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1])
    return (x_max-x_min)*(y_max-y_min)
}