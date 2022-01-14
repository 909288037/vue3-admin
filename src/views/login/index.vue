<!--
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-13 14:04:52
 * @LastEditTime: 2022-01-14 11:00:11
 * @LastEditors: Liu Shuai
 * @Reference:
-->
<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFromRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入账号">
          <template #prefix>
            <span class="svg-container">
              <svg-icon icon="user"></svg-icon>
            </span> </template
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <span class="svg-container">
              <svg-icon icon="password"></svg-icon>
            </span>
          </template>
          <template #suffix>
            <span class="svg-container svg-cursor" @click="onChangePwdType">
              <svg-icon
                :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
              ></svg-icon>
            </span>
          </template>
        </el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%"
          :loading="loading"
          @click="handerLogin(loginFromRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
const loginFromRef = ref(null)
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名必须填写！'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 切换密码显示/隐藏
const passwordType = ref('password')
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 处理登录
const loading = ref(false)
const store = useStore()
const handerLogin = (formEl) => {
  formEl.validate((valid) => {
    if (!valid) return

    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch((err) => {
        loading.value = false
        console.log(err)
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 365px;

    margin: auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      .el-input__prefix,
      .el-input__suffix,
      .el-input__suffix-inner {
        display: flex;
        align-items: center;
      }
      .el-input__suffix-inner {
        height: 100%;
      }
      input {
        height: 100%;
        background: transparent;
        border: 0;
        border-radius: 0;
        padding: 12px 5px 12px 35px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }
  .svg-cursor {
    cursor: pointer;
  }
  .title-container {
    .title {
      text-align: center;
      color: #fff;
      font-weight: bold;
      font-size: 22px;
    }
  }
}
</style>
