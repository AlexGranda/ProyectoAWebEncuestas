/**
 * Encuesta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    likes: {
      type: 'integer',
      defaultsTo: 0
    },
    dislikes: {
      type: 'integer',
      defaultsTo: 0
    },
    comentarios: {
      collection: 'Comentario',
      via:'idEncuesta'
    },
    idUsuario: {
      model: 'Usuario'
    },
    etiquetas: {
      collection: 'Etiqueta',
      via: 'encuestas',
      dominant: true
    }
  }
};
