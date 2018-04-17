const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';
var collection = null;
MongoClient.connect(url,(error,client)=>{
if(error){
return console.log(error);}
const db = client.db('TodoApp');
// insert into Users collection
db.collection('Users').insertOne({name : 'Aavish',age : 30, work : 'Software'},(error,result)=>{
if(error){
return console.log(error);}
console.log(JSON.stringify(result.ops,undefined,2));
});
// insert into Todos collection
db.collection('Todos').insertOne({text : 'something to do' , completed : false},(err,result)=>{
if(err)
return console.log(err);
console.log(JSON.stringify(result.ops,undefined,2));
});
client.close();
});
