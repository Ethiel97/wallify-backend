'use strict';

/**
 * saved-wallpaper service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved-wallpaper.saved-wallpaper');
