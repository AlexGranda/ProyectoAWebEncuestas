/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: 'integer',
      unique: true,
      primaryKey: true
    },
    nombres: {
      type: 'string',
      required: true,
    },
    apellidos: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'date',
      required: true
    },
    imagen: {
      type: 'binary',
    },
    correo: {
      type: 'email',
      unique: true
    },
    comentarios: {
      collection: 'Comentario',
      via: 'idUsuario'
    }
  }
};
