 /**
* Activity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_activity',

  attributes: {
  	 id_activity : {
  	 	type : 'integer',
  	 	primaryKey: true,
      autoIncrement: true
  	 },
  	 name : {
  	 	type : 'string',
  	 	size : 50,
      required: true
  	 },
  	 description : {
  	 	type : 'string',
  	 	size : 200
  	 },
     categories : {
            collection: 'category',
            via: 'activities'
     },
     services : {
        collection : 'service',
        via : 'activities'
     }
  }
};

