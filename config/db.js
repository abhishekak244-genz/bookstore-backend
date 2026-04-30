const mongoose = require ('mongoose')
const connectionString  = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log('database connection succesful');
    
}).catch(error =>{
    console.log('database connection failed');
    console.log(error);
    
    
})