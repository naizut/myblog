<template>
    <div class="login-container">
        <div class="login-form-wrapper">
            <a-form
                id="components-form-demo-normal-login"
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
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)

          this.axios({
            method: 'post',
            url: '/api/users/login',
            data: values
          }).then(res => {
            console.log(res.data)
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
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
