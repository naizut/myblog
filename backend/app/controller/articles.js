const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class ArticleController extends Controller {
  async create() {
    const { ctx, app } = this
    const { title, content, type, tag, created_on } = ctx.request.body
    const article = await ctx.model.Article.create({ title, content, type, tag, created_on })
    ctx.status = 201;
    
    ctx.body = article;
  }

  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.Article.findAll(query);
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.request.body.id);
    const article = await ctx.model.Article.findByPk(id);
    if (!article) {
      ctx.status = 404;
      return;
    }

    await article.destroy();
    ctx.status = 200;
  }

  async detail() {
    const { ctx } = this
    const id = toInt(ctx.params.id)
    ctx.body = await ctx.model.Article.findByPk(id);
  }

  async update() {
    const { ctx } = this
    const { id, title, content, type, tag, modified_on } = ctx.request.body;
    const article = await ctx.model.Article.findByPk(toInt(id));
    if (!article) {
      ctx.status = 404;
      return;
    }
    
    await article.update({ title, content, type, tag, modified_on });
    ctx.body = article;
  }
}

module.exports = ArticleController;