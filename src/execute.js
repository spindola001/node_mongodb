import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

let dataBaseList = [
    "baseDeDados" // Insira aqui a sua lista de bases a serem limpas
];

// Método responsável pode realizar a conexão com o servidor mongodb
async function connectToCluster(uri) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

// Método que recebe a base de dados da "dataBaseList", conecta com o servidor e executa a limpeza nas collections
async function clearCollections(base) {
    const uri = process.env.DB_URI;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);

        const db = mongoClient.db(base);

        const collections = await db.listCollections().toArray(); //Preeche um array com as collections da base de dados atual

        //Percorre todas as collection encontradas na base efetuando a limpeza nas mesmas, através do deleteMany({})
        for (let index = 0; index < collections.length; index++) {
            const collectionName = collections[index].name;
            await db.collection(collectionName).deleteMany({});
            console.log(`Collection ${collectionName} clean.`);
        }
    } finally {
        await mongoClient.close();
    }
}

export function clearAllDatabases() {
    for (let index = 0; index < dataBaseList.length; index++) {
        clearCollections(dataBaseList[index]);
    }
}