const Service = require('egg').Service;

// function toInt(str) {
//     if (typeof str === 'number') return str;
//     if (!str) return str;
//     return parseInt(str, 10) || 0;
// }
  
class UserService extends Service {    
    // async login(userid, pwd) {
    //     const {ctx} = this
    //     ctx.body = await ctx.model.User.findAll(query)
    // }
}

module.exports = UserService;