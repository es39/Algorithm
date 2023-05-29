function solution(keyinput, board) {
    let result = [0, 0]
    let lengthX = board[0]/2
    let lengthY = board[1]/2
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === 'up' && result[1]+1 < lengthY) result[1]++
        if(keyinput[i] === 'down' && result[1]-1 > -lengthY) result[1]--
        if(keyinput[i] === 'left' && result[0]-1 > -lengthX) result[0]--
        if(keyinput[i] === 'right'&& result[0]+1 < lengthX) result[0]++
    }
    return result
}