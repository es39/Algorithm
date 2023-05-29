function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let lengthX = board[0]/2
    let lengthY = board[1]/2
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === 'up' && y+1 < lengthY) y++
        if(keyinput[i] === 'down' && y-1 > -lengthY) y--
        if(keyinput[i] === 'left' && x-1 > -lengthX) x--
        if(keyinput[i] === 'right'&& x+1 < lengthX) x++
    }
    return [x, y]
}