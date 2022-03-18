<!--
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-15 18:06:30
 * @LastEditTime: 2022-01-15 18:18:44
 * @LastEditors: Liu Shuai
 * @Reference:
-->
<template>
  <el-menu
    :unique-opened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子集 menu -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><user-filled /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单 -->
    <el-menu-item index="2">
      <el-icon><user-filled /></el-icon>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {} from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped></style>
