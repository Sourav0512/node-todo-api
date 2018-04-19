const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';
var collection = null;
MongoClient.connect(url,(error,client)=>{
if(error){
return console.log(error);}
const db = client.db('TodoApp');
// insert into Users collection
// db.collection('Users').insertOne({name : 'Aavish',age : 30, work : 'Software'},(error,result)=>{
// if(error){
// return console.log(error);}
// console.log(JSON.stringify(result.ops,undefined,2));
// });
// insert into Todos collection
// db.collection('Todos').insertOne({text : 'something to do' , completed : false},(err,result)=>{
// if(err)
// return console.log(err);
// console.log(JSON.stringify(result.ops,undefined,2));
// });
//find a false doc in Todos collection
// db.collection('Todos').find({completed : false}).toArray().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));   
// },(error)=>{
//     console.log('unable to fetch docs',error);
// });
// to count the return set

//  find a particular doc in the Users collection
// db.collection('Users').find({name : 'Aavish'}).toArray().then((result)=>{
// console.log(JSON.stringify(result,undefined,2));
// },(err)=>{
// console.log(err);
// });

// delete one record
// db.collection('Todos').deleteOne({text : 'fucking the neighbour'});

//delete multiple records 
// db.collection('Users').deleteMany({name : 'Aavish'});

//insert into grades collection 6 docs
// db.collection('grades').insertMany([{name : 'A. MacDyver', assignment : 5, points : 24 },
// {  name : 'B. Batlock', assignment : 3, points : 22 },
// {  name : 'M. Tagnum', assignment : 5, points : 30 },
// {  name : 'R. Stiles', assignment : 2, points : 12 },
// {  name : 'A. MacDyver', assignment : 2, points : 14 },
// {  name : 'R. Stiles', assignment : 1, points : 10 }],(err,result)=>{
//     if(err)
//     return console.log(err);
//     else
//     console.log(JSON.stringify(result,undefined,2));
// });

//sort the collection by points and delete the first one
db.collection('grades').findOneAndDelete({name : 'A. MacDyver'},{sort :{points : 1}}).then((result) => {
console.log(JSON.stringify(result.value,undefined,2));
});

client.close();
});
