/*
* https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
* */
/**
 * @param {string} s
 * @return {number}
 * abcabcbb
 */
export default (s) => {
  let len = s.length
  if (len === 1) return 1
  let num = 0
  let j = 0
  let t = 0
  for (let i = 0; i < len; i++) {
    t = s.slice(j, i).indexOf(s[i])
    if (t === -1) {
      num = Math.max(num, i - j + 1)
    } else {
      j = j + t + 1
    }
  }
  return num
}
