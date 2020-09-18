<template>
    <div class="login-container">
        <div class="login-form-wrapper">
            <a-form
                id="normal-login"
                :form="form"
                :model="loginForm"
                class="login-form"
                @submit="handleSubmit"
            >
                <a-form-item>
                    <a-input
                        v-decorator="[
                        'username',
                        { rules: [{ required: true, message: 'Please input your username!' }] },
                        ]"
                        placeholder="Username"
                        autofocus
                    >
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-decorator="[
                        'password',
                        { rules: [{ required: true, message: 'Please input your Password!' }] },
                        ]"
                        type="password"
                        placeholder="Password"
                    >
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox
                        v-decorator="[
                        'remember',
                        {
                            valuePropName: 'checked',
                            initialValue: true,
                        },
                        ]"
                    >
                        Remember me
                    </a-checkbox>
                    <a class="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <a-button type="primary" html-type="submit" class="login-form-button">
                        Log in
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {}
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    ...mapMutations(['changeLogin']),
    handleSubmit (e) {
      let _this = this
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)

          this.axios({
            method: 'post',
            url: '/api/users/login',
            data: values
          }).then(res => {
            if (res.data.token) {
              _this.usertoken = 'Bearer ' + res.data.token
              _this.changeLogin({ token: _this.usertoken })

              let redirect = _this.$route.query.redirect
              if (redirect) {
                _this.$router.push(redirect)
              } else {
                _this.$router.push('/home')
              }
            } else {
              alert(res.data.errmsg)
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          alert('Plz input correct info!')
        }
      })
    }
  }
}
</script>
<style>
.login-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#normal-login .login-form {
  max-width: 300px;
}
#normal-login .login-form-forgot {
  float: right;
}
#normal-login .login-form-button {
  width: 100%;
}
</style>
