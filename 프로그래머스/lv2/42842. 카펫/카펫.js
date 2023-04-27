function solution(brown, yellow) {
    // x, y > 3
    // (x-2)(y-2) === yellow
    // (brown+yellow) / x = y
    let width = 0;
    let height = 0;
    let area = brown + yellow;
    let result = []
    for(let i=3; i<area; i++){
        width = area/i;
        height = i;
        if(width < height) continue;
        if((width-2)*(height-2) === yellow){
            result[0] = width;
            result[1] = height;
        }
    }
    return result;
}