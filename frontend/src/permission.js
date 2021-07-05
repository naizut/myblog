import router from './router'
// import settings from './settings'

router.beforeEach((to, from, next) => {
  document.title = 'Ky\'s Lab - Pure share'
  next()
})
