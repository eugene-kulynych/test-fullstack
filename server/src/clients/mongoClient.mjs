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

    findOne = async (schema, query) => {
        try {
            return await schema.findOne(query);
        } catch (e) {
            console.log(e)
        }

    }

    getAll = async (schema) => {
        try {
            return await schema.find();
        } catch (e) {
            console.log(e)
        }
    }

    save = async (schema) => {
        try {
            await schema.save();
        } catch (e) {
            console.log(e)
        }
    }

    remove = async (schema, query) => {
        try {
            return await schema.deleteOne(query);
        } catch (e) {
            console.log(e);
        }

    }

}

export const mongoDBClient = new MongoClient(URL);
