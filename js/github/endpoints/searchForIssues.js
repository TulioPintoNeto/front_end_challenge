import { showIssues } from "../showIssues.js";

export async function searchForIssues(octokit,$repositoryButton) {

    let repository = $repositoryButton.text();
    let owner = $repositoryButton.data().owner;

    let haveMorePages = true;
    let page = 1;

    var issues = [];

    while (haveMorePages) {
        const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
            owner: owner,
            repo: repository,
            per_page: 100,
            state: "all",
            page: page,
        });

        if (page == 20 || result.data.length < 100) {
            haveMorePages = false;
        }
        page++;
        
        issues = issues.concat(result.data);
    }

    showIssues(issues,$repositoryButton);
}