'use strict';

/**
 *  saved-wallpaper controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::saved-wallpaper.saved-wallpaper', ({strapi}) => ({

  async create(ctx, next) {
    const {id, username} = ctx.state.user;
    const entry = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').create({
      data: {
        uid: `${ctx.request.body.data.uid}:${id}:${username}`,
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entry, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async findUserSavedWallpapers(ctx, next) {
    //find all saved wallpapers where uid contains the current user id
    const {id} = ctx.state.user;
    const wallpapers = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').findMany({
      where: {
        uid: {
          $containsi: id,
        },
      },
    })

    const sanitizedEntity = await this.sanitizeOutput(wallpapers, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  findByUid: async (ctx, next) => {
    const {uid} = ctx.request.params
    const {id, username} = ctx.state.user;

    const uidToFind = `${uid}:${id}:${username}`
    const entity = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').findOne({
      where: {
        uid: uidToFind
      }
    });

    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return {data: entity}
  },

  deleteByUid: async (ctx, next) => {
    const {uid} = ctx.request.params
    const {id, username} = ctx.state.user;

    const uidToDelete = `${uid}:${id}:${username}`

    const entity = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').delete({
      where: {uid: uidToDelete}
    });

    return {
      data: entity,
    }
  },

  deleteAll: async (ctx, next) => {
    const {id} = ctx.state.user

    const entity = await strapi.db.query('api::saved-wallpaper.saved-wallpaper').deleteMany({
      where: {
        uid: {
          $containsi: id,
        },
      },
    });

    return {
      data: entity,
    }
  }
}));
