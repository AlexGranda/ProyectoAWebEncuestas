/**
 * Encuesta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'integer',
      unique: true,
      primaryKey: true,
    },
    titulo: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    imagen: {
      type: 'binary',
    },
    likes: {
      type: 'integer'
    },
    dislikes: {
      type: 'integer'
    },
    comentarios: {
      collection: 'Comentario',
      via:'idEncuesta'
    }
  }
};
