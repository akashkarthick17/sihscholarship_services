import * as  mongodb from 'mongodb';

let mongoClient = mongodb.MongoClient;


export class MongoDBClient {

    static url = 'mongodb://159.65.144.202:27017';
    static dbName = 'fbuy';

    static connect() {
        return mongoClient.connect(this.url, { useNewUrlParser: true });
    }

    static insertOne(documentName: string, document: any) {

        return this.connect().then(client => {
            console.log('successfully connected to the server');
            const db = client.db(this.dbName);
            const collection = db.collection(documentName);
            return collection.insertOne(document).then(result => {
                console.log('successfully inserted');
                client.close();
                return result;
            }).catch(err => {
                console.log('err', err);
            });
        }).catch(err => {
            console.log('err', err);
        });

    }

    static insertMany(documentName: string, document: any[]) {

        return this.connect().then(client => {
            console.log('successfully connected to the server');
            const db = client.db(this.dbName);
            const collection = db.collection(documentName);
            return collection.insertMany(document).then(result => {
                console.log('successfully inserted many');
                client.close();
                return result;
            }).catch(err => {
                console.log('err', err);
            });
        }).catch(err => {
            console.log('err', err);
        });

    }

    static find(documentName: string, documentValue: any) {

        return this.connect().then(async client => {
            console.log('successfully connected to the server');
            const db = client.db(this.dbName);
            const collection = db.collection(documentName);
            return collection.findOne(documentValue).then(result => {
                console.log('found document');
                console.log(result);
                client.close();
                return result;
            }).catch(err => {
                console.log('err', err);
            });
        }).catch(err => {
            console.log('err', err);
        });

    }

    static updateOne(documentName: string, findDocument: any, updateDocument: any) {

        return this.connect().then(async client => {
            console.log('successfully connected to the server');
            const db = client.db(this.dbName);
            const collection = db.collection(documentName);
            return collection.update(findDocument, updateDocument).then(result => {
                console.log('found document');
                console.log(result);
                client.close();
                return result;
            }).catch(err => {
                console.log('err', err);
            });
        }).catch(err => {
            console.log('err', err);
        });

    }

    static updateMany(documentName: string, findDocument: any, updateDocument: any[]) {

        return this.connect().then(async client => {
            console.log('successfully connected to the server');
            const db = client.db(this.dbName);
            const collection = db.collection(documentName);
            return collection.update(findDocument, updateDocument).then(result => {
                console.log('found document');
                console.log(result);
                client.close();
                return result;
            }).catch(err => {
                console.log('err', err);
            });
        }).catch(err => {
            console.log('err', err);
        });

    }

}