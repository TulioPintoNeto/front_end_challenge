import { showRepo } from "../showRepo.js";

export async function doRepoUserSearch(owner,octokit) {
    const result = await octokit.request('GET /users/{username}/repos', {
        username: owner,
        per_page: 3,
    });

    let repoList = result.data;
    showRepo(repoList,owner,octokit);
}