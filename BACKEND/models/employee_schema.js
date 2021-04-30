const schema_mongoose = require('mongoose');

const EmployeeSchema = schema_mongoose.Schema(
    {
    stdname: { type: String },
    stdroll: { type: String },
    stdsub1: { type: String },
    stdsub2: { type: String },
    stdsub3: { type: String },
   
	regdatetime: { type: Date, default: Date.now }
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('emp_schema_collection', EmployeeSchema);