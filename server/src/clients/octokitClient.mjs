import { Octokit } from 'octokit';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'})

class OctokitClient {
  constructor(authToken) {
    this.authToken = authToken;
    this.octo = new Octokit({
      auth: this.authToken,
    });
  }

  getRepos = async (owner, repo) => {
    try {
      const result = await this.octo.request("GET /repos/{owner}/{repo}", {
        owner,
        repo,
      });

      return result;
    } catch (e) {
      console.log(e)
      return {status: 404, message: 'Not Found'}
    }
  }
}

export const octoInstance = new OctokitClient(process.env.GIT_TOKEN)
