const {MongoClient}=require('mongodb');
//const url='mongodb://localhost:27017';
const url='mongodb+srv://Bhavaya89:bhavaya123@cluster0.noadl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client= new MongoClient(url);
const dbName='sample_mflix';

async function main() {
    await client.connect();
    console.log('connected successfully to the server');
    const db=client.db(dbName);
    return db;
}

module.exports={main}