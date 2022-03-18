<!--
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 16:32:16
 * @LastEditTime: 2022-01-15 14:31:18
 * @LastEditors: Liu Shuai
 * @Reference:
-->
<template>
  <div class="navbar">
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          >
          </el-avatar>
          <el-icon><Tools /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item>
              <router-link to="/"> 主页 </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <a target="_blank" href="http://ucool.ink/"> 我的主页 </a>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { Tools } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore()

const logout = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 30px;
  }
  ::v-deep .avatar-container {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .el-avatar {
        --el-avatar-bg-color: none;
        margin-right: 12px;
      }
    }
  }
}
</style>
