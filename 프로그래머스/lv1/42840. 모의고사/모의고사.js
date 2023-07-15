function solution(answers) {
    const person1 = [1, 2, 3, 4, 5]
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let scores = [0, 0, 0]
    answers.map((answer, idx) => {
        if(answer === person1[idx%person1.length]) scores[0] ++;
        if(answer === person2[idx%person2.length]) scores[1] ++;
        if(answer === person3[idx%person3.length]) scores[2] ++;
        return scores
    })
    const maxScore = Math.max(...scores)
    let maxScorePerson = []
    if(maxScore === scores[0]) maxScorePerson.push(1)
    if(maxScore === scores[1]) maxScorePerson.push(2)
    if(maxScore === scores[2]) maxScorePerson.push(3)
    return maxScorePerson.sort((a, b) => a-b)
}