function solution(sizes) {
    let width = []
    let height = []
    sizes.map((el, i) => {
        width[i] = Math.max(...el);
        height[i] = Math.min(...el);
    })
    return Math.max(...width) * Math.max(...height)
}