import { searchForContributors } from "./endpoints/searchForContributors.js";

export const searchInRepo = (octokit,$repositoryButton) => {
    const $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeIn();

    searchForContributors(octokit,$repositoryButton);
}