import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    issues: {
        type: Number,
        required: true,
    },
    forks: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    }
});

export const projectModel = mongoose.model('Project', ProjectSchema);
