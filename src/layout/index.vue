<!--
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 15:28:19
 * @LastEditTime: 2022-01-15 09:59:58
 * @LastEditors: Liu Shuai
 * @Reference:
-->
<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <Sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <nav-bar />
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import NavBar from './components/NavBar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.scss'

console.log(variables)
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
  width: calc(100% - #{$sideBarWidth});
}
</style>
