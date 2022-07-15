'use strict';

/**
 *  saved-wallpaper controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::saved-wallpaper.saved-wallpaper', ({strapi}) => ({
  findByUid: async (ctx, next) => {
    const {uid} = ctx.request.params

    const entity = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').findOne({
      where: {uid}
    });

    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return {data: entity}
  },

  deleteByUid: async (ctx, next) => {
    const {uid} = ctx.request.params

    const entity = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').delete({
      where: {uid}
    });

    return {
      data: entity,
    }
  }
}));
