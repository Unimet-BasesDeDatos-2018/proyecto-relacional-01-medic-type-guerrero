/**
 * Medico.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      id:{
        type: 'integer',
        primaryKey: true,
        autoIncrement:true
      },
      nombre:{
        type: 'string'
      },
      NumConsultorio:{
        type: 'integer'
      },
    
    // Nose como manejar los horarios son tablas separadas no los puedo relacionar con otro modelo
  }
};
