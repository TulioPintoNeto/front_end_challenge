import { doRepoUserSearch } from "./endpoints/doRepoUserSearch.js";
import { doRepoOrgSearch } from "./endpoints/doRepoOrgSearch.js";

export const doSearchOnGitHubAPI = (event,octokit) => {
    event.preventDefault();
    event.stopPropagation();

    const $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeIn();
    
    const $repositoryList = $("#repo-list");
    $repositoryList.html("");

    $("#no-results-found").hide("fade");
    
    let $radioChecked = $("#search-filter .form-check-input:checked");
    let type = $radioChecked.data().type;
    
    let owner = $("#search-input").val();

    type == "user" ?
    doRepoUserSearch(owner,octokit) :
    doRepoOrgSearch(owner,octokit);
    
}
