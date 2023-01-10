function solution(emergency) {
    const sort_emergency = [...emergency].sort((a, b) => b-a)
    return emergency.map(el => sort_emergency.indexOf(el)+1)
}