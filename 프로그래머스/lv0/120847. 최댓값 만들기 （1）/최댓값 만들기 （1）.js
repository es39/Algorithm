function solution(numbers) {
    let nums = numbers.sort((a, b) => b-a)
    return nums[0]*nums[1]
}