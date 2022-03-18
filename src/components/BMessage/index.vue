<!--
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-24 14:56:45
 * @LastEditTime: 2022-01-24 15:50:12
 * @LastEditors: Liu Shuai
 * @Reference:
-->
<template>
  <transition name="move" appear>
    <div class="b-message" v-if="visible">
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from 'vue'
// 获取外部传参
const props = defineProps({
  // message 图标
  message: {
    type: String,
    default: '我是一个默认的文字。。。'
  },
  visible: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3000
  }
})
console.log(props)
</script>
<style lang="scss" scoped>
.b-message {
  position: fixed;
  top: 15px;
  left: 0;
  right: 0;
  width: 30%;
  height: 40px;
  line-height: 40px;
  padding: 5px 10px;
  margin: auto;
  background: skyblue;
  color: #fff;

  // 动画进入时
  &.move-enter-from,
  &.move-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  //   持续时间
  &.move-enter-active,
  &.move-leave-active {
    transition: 0.3s linear;
  }
}
</style>
