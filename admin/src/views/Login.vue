<template>
    <div class="login-container">
                <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left"
        >
            <h3 class="title">Ant Blog Admin</h3>
            <el-form-item prop="name">
                <span class="svg-container">
                    <svg-icon icon-class="user" />
                </span>
                <el-input
                    v-model="loginForm.email"
                    type="email"
                    auto-complete="on"
                    placeholder="邮箱"
                />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input
                    :type="pwdType"
                    v-model="loginForm.password"
                    auto-complete="on"
                    placeholder="密码"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon icon-class="eye" />
                </span>
            </el-form-item>
            <el-form-item>
                <el-button
                    :loading="loading"
                    type="primary"
                    style="width:100%;"
                    @click.native.prevent="handleLogin"
                >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    
}
</script>