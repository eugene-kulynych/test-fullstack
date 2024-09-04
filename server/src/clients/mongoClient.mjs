import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'})

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fxgm2.mongodb.net/`;

class MongoClient {
    constructor(url) {
        this.url = url
    }

    connect = () => {
        mongoose
            .connect(this.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: process.env.DB_NAME,
            })
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.error('Failed to connect to MongoDB', err));
    };

    health = () => {
        return mongoose.connection.readyState;
    };
}

export const mongoDB = new MongoClient(URL);
