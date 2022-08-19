<!--  -->
<template>
  <div>力扣刷题</div>
  <div @click="twoSum([3, 2, 4], 6)">1. 两数之和：2022-8-18</div>
  <div>2. 两数相加：2022-8-18</div>
  <div>3. 无重复字符的最长子串：2022-8-18</div>
</template>

<script setup lang="ts">
import { number } from "@intlify/core-base";
import { listenerCount } from "process";
import { ref } from "vue";

function twoSum(nums: number[], target: number): number[] {
  console.log(nums, target);
  const resnum: number[] = [];
  nums.some((item, index) => {
    const twoIndex = nums.findIndex((it, idx) => {
      return it + item === target && index !== idx;
    });
    console.log(index, twoIndex);
    if (twoIndex !== -1) {
      resnum.push(index);
      resnum.push(twoIndex);
      return true;
    }
  });
  console.log(resnum);
  return resnum;
}
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
console.log(new ListNode(10, 9, 8, 5));
function addTwoNumbers(l1: ListNode | null, l2: ListNode): ListNode | null {
  console.log(l1, l2);
  if (!Array.isArray(l1)) {
    l1 = [];
  }
  if (!Array.isArray(l2)) {
    l2 = [];
  }
  let l3: any = [];
  let l4: any = [];
  if (l1?.length > l2?.length) {
    l3 = l1;
    l4 = l2;
  } else {
    l3 = l2;
    l4 = l1;
  }
  const returnres: any = [];
  // 对数据较长的进行循环
  l3?.forEach((item: number, index: number) => {
    if (l4[index]) {
      // 数据短的那个上面存在数据
      returnres.push((item + l4[index]) % 10);
      if (Math.floor((item + l4[index]) / 10) > 0) {
        l3[index + 1] += Math.floor((item + l4[index]) / 10);
      }
    } else {
      // 短的上面不存在数据
      // console.log(Math.floor(item / 10), "11");
      // console.log(l3[index + 1], "22");
      // if (Math.floor(item / 10) > 0) {
      if (item > 9) {
        returnres.push(item % 10);
        if (l3[index + 1]) {
          l3[index + 1] += Math.floor(item / 10);
        } else {
          returnres.push(Math.floor(item / 10));
        }
      } else {
        returnres.push(item);
      }
    }
  });
  console.log(returnres, "returnres");
  return returnres;
}
function lengthOfLongestSubstring(s: string): number {
  console.log(s);
  const uList = s.split("");
  uList.forEach((item) => {
    console.log(item);
  });
  console.log(uList);
}
lengthOfLongestSubstring("abcabcbb");
</script>

<style lang="scss" scoped></style>
