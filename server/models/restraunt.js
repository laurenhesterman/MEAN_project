var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// create the schema
var RestrauntSchema = new mongoose.Schema({
    name:  {type: String, required: [true, 'Restraunt name is required'], minlength: 3, unique: true, dropDups: true},
    cuisine: {type: String, required: [true, 'Cuisine Type is required'], minlength: 3},
    
   }, {timestamps: true }) 

   

   mongoose.model('Restraunt', RestrauntSchema); 
   RestrauntSchema.plugin(uniqueValidator);
// register the schema as a model
var Restraunt = mongoose.model('Restraunt', RestrauntSchema);