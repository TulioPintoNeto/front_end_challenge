import { showRepo } from "../showRepo.js";

export async function doRepoOrgSearch(owner,octokit) {
    const result = await octokit.request('GET /orgs/{org}/repos', {
        org: owner,
        per_page: 3,
    });

    let repoList = result.data;
    showRepo(repoList,owner,octokit);
}