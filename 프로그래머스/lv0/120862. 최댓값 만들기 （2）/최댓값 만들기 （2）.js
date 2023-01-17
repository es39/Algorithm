function solution(numbers) {
    //양수일 때, 음수일 때를 구분
    let nums = numbers.sort((a, b) => a-b)
    return Math.max(nums[0]*nums[1], nums[nums.length-2]*nums[nums.length-1])
}