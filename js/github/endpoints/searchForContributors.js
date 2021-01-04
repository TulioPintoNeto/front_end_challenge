import { showContributors } from "../showContributors.js";

export async function searchForContributors(octokit,$repositoryButton) {

    let repository = $repositoryButton.text();
    let owner = $repositoryButton.data().owner;

        const result = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
            owner: owner,
            repo: repository,
            per_page: 20,
        });

        let contributors = result.data;

        showContributors(contributors,$repositoryButton);
}