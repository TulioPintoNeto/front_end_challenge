import { showIssueDetails } from "../showIssueDetails.js";

export async function searchForIssueDetails(issues,$issueElement,octokit,$repositoryButton) {

    let repository = $repositoryButton.text();
    let owner = $repositoryButton.data().owner;
    let issueNumber = $issueElement.data().number;
    let issueTitle = $issueElement.html();

    let issue = issues.find(issue => {
        return issue.number === issueNumber;
    });

    const result = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}/comments', {
        owner: owner,
        repo: repository,
        per_page: 100,
        issue_number: issueNumber,
    });

    let comments = result.data;

    showIssueDetails(issueTitle,issue,comments);
}