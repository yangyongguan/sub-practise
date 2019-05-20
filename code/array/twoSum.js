/*
* https://leetcode-cn.com/problems/two-sum/
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 普通版
 */
// export default (nums, target) => {
//   if (nums.length < 2) {
//     return [0, 0]
//   }
//   for (let i = 0, len = nums.length; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (target === nums[i] + nums[j]) {
//         return [i, j]
//       }
//     }
//   }
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 高效版本
 */
export default (nums, target) => {
  let m = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (m.has(complement)) {
      return [m.get(complement), i]
    }
    m.set(nums[i], i)
  }
  throw Error('No two sum solution')
}
