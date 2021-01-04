import { doRepoUserSearch } from "./endpoints/doRepoUserSearch.js";
import { doRepoOrgSearch } from "./endpoints/doRepoOrgSearch.js";

export const doSearchOnGitHubAPI = (event,octokit) => {
    event.preventDefault();
    event.stopPropagation();

    const $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeIn();

    $("#no-results-found").hide("fade");
    
    let $radioChecked = $("#search-filter .form-check-input:checked");
    let type = $radioChecked.data().type;
    
    let owner = $("#search-input").val();

    try {
        type == "user" ?
        doRepoUserSearch(owner,octokit) :
        doRepoOrgSearch(owner,octokit);
    } catch(e) {
        console.log("Erro: "+e);
        $("#no-results-found").show("fade");

        $loadingAnimation.fadeOut();
    }
    
}
