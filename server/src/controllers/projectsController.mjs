import {projectModel} from "../schemas/projectSchema.mjs";
import {octoInstance} from "../clients/octokitClient.mjs";
import isEmpty from 'lodash.isempty';

export const getAllProjects = async (req, res) => {
    try {
        const all = await projectModel.find();
        res.status(200).send(all);
    } catch (e) {
        console.log(e)
    }
}

export const createProject = async (req, res) => {
    try {
        const {owner, repo} = req.body;
        const gitDetails = await octoInstance.getRepos(owner, repo);

        if (gitDetails.status === 404) {
            res.status(404).send({message: 'Not Found'})
        }

        const {owner: { login, url }, name, stargazers_count, forks, open_issues, created_at } = gitDetails.data;
        const date = new Date(created_at);
        const timestampUNIX = Math.floor(date.getTime() / 1000);

        const project = new projectModel({
            owner: login,
            name,
            url,
            stars: stargazers_count,
            issues: open_issues,
            forks,
            createdAt: timestampUNIX
        })

        await project.save();
        res.status(201).send({message: 'Created'})
    } catch (e) {
        console.log(e);
    }
}

export const updateProject = async (req, res) => {

}

export const deleteProject = async (req, res) => {

}
