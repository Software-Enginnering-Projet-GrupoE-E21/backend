'use strict';

/**
 * A set of functions called "actions" for `students`
 */

const {
  parseMultipartData,
  sanitizeEntity
} = require('strapi-utils');

module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  async create(ctx) {
    let entity;
    
    entity = await strapi.services.restaurant.create(ctx.request.body);
    
    return sanitizeEntity(entity, {
      model: strapi.models.restaurant
    });
  },
};
