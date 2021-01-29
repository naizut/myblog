import router from "./router";
import settings from "./settings";

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " | " + settings.title;
  }
  next();
});
