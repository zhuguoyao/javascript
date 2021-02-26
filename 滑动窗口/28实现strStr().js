/*
  题目 : 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
  示例1 :
    输入: haystack = "hello", needle = "ll"
    输出: 2
  示例2 :
    输入: haystack = "aaaaa", needle = "bba"
    输出: -1
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-strstr
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var strStr = function (haystack, needle) {
  let H = haystack.length;
  let N = needle.length;
  for (let i = 0; i <= H - N; i++) {
    let j;
    for (j = 0; j < N; j++) {
      if (needle[j] !== haystack[i + j]) break;
    }
    if (j === N) return i;
  }
  return -1;
}
