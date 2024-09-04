import {projectModel} from "../schemas/projectSchema.mjs";
import {octoInstance} from "../clients/octokitClient.mjs";
import {mongoDBClient} from "../clients/mongoClient.mjs";
import isEmpty from 'lodash.isempty';

export const getAllProjects = async (req, res) => {
    try {
        const allProjects = await mongoDBClient.getAll(projectModel);
        res.status(200).send(allProjects);
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

        const {owner: {login}, html_url, name, stargazers_count, forks, open_issues, created_at} = gitDetails.data;
        const date = new Date(created_at);
        const timestampUNIX = Math.floor(date.getTime() / 1000);

        const duplicated = await mongoDBClient.findOne(projectModel, {name});
        if (!isEmpty(duplicated)) {
            return res.status(401).send({message: 'This one is already existed'})
        }

        const project = new projectModel({
            owner: login,
            name,
            url: html_url,
            stars: stargazers_count,
            issues: open_issues,
            forks,
            createdAt: timestampUNIX
        })

        await mongoDBClient.save(project);
        res.status(201).send({message: 'Created'})
    } catch (e) {
        console.log(e);
    }
}

export const updateProject = async (req, res) => {

}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projectToRemove = await mongoDBClient.findOne(projectModel, {_id: id});
        await mongoDBClient.remove(projectModel, projectToRemove);

        res.status(200).send({message: 'Removed'});
    } catch (e) {
        console.log(e)
    }
}
