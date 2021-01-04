import { searchForContributors } from "./endpoints/searchForContributors.js";
import { searchForIssues } from "./endpoints/searchForIssues.js";

export const searchInRepo = (octokit,$repositoryButton) => {
    const $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeIn();
    

    searchForContributors(octokit,$repositoryButton);
    searchForIssues(octokit,$repositoryButton);
}