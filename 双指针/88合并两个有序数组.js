/*
  题目 : 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
  要求 : 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
  示例1 :
    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]
  示例2 :
    输入：nums1 = [1], m = 1, nums2 = [], n = 0
    输出：[1]
    解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/merge-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;
  while (j >= 0) {
    if (nums1[i] > nums1[j]) {
      nums1[k] = nums1[i]
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  return nums1
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
