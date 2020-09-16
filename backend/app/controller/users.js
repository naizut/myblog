const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  // async index() {
  //   const ctx = this.ctx;
  //   const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
  //   ctx.body = await ctx.model.User.findAll(query);
  // }

  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const username = data.username;
    const user = await ctx.model.User.getUserByArgs({username}, '')
    
    if (!user) {
      return ctx.body = {
        errmsg: 'User not found.',
        errcode: 10001
      }
    }
    //dataValues是 user中await后返回的字段之一
    if (!(await ctx.model.User.compareSync(data.password, user.dataValues.password))) {
      return ctx.body = {
        errmsg: 'Incorrect Password.',
        errcode: 10002,
        errpwd: user.dataValues.password
      }
    }

    if (data.remember) {
      this.ctx.cookies.set('username', data.username, {
        maxAge: 1000*360*24,
        httpOnly: true,
        signed: true,  //防止用户修改cookie
        encrypt: true,  //对cookie加密  如果为true get方法也需要加上encrypt true
      })
    }

    const token = app.jwt.sign({
      username: data.username
    }, app.config.jwt.secret);
    
    ctx.body = token;
  }

  async logout() {
    this.ctx.cookies.set('username', null)
    this.ctx.redirect('/')
  }

  async index() {
    const { ctx } = this;
    console.log("ctx.state.user______________________:",ctx.state.user);
    ctx.body = { code: 201, msg: '验证成功' };
  }
}

module.exports = UserController;