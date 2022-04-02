
const app = require('./index')
const Port =  5000;
const connect = require('./configs/db')

 app.listen(Port, async() =>{
    try{

       await connect()
    console.log(`listening on ${Port}`)

    }catch(err){console.log(err)}
})

