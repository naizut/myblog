<template>
  <div class="contact">
    <div class="inner-wrap">
      <!-- BreadCrumb Here -->
      <div class="bread-crumb pd20 mb50 pl0">
        <router-link to="/home">Home</router-link> > <span class="text-primary">Contact</span>
      </div>
      <div class="section contact-business">
        <h1>Contact:</h1>
        <h3>WeChat: vincarchou</h3>
        <h3>Email: naizut@163.com</h3>
      </div>

      <!-- <div class="section contact-business">
        <h1>Contact:</h1>
        <h3>WeChat: vincarchou</h3>
        <h3>Email: naizut@163.com</h3>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact{
  .inner-wrap {
    text-align: left;

    * {font-weight: 300}
    .section {
      float: left;
      width: 49%;
    }
  }
}
</style>
