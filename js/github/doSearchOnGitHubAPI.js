import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { showRepo } from "./showRepo.js";

export const doSearchOnGitHubAPI = event => {
    event.preventDefault();
    event.stopPropagation();

    const $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeIn();

    $("#no-results-found").hide("fade");

    const octokit = new Octokit();
    
    let $radioChecked = $("#search-filter .form-check-input:checked");
    let type = $radioChecked.data().type;
    
    let owner = $("#search-input").val();
    var repoList;

    if (type == "user") {
        try {
            async function doSearch() {
                const result = await octokit.request('GET /users/{username}/repos', {
                    username: owner,
                });

                repoList = result.data;
                showRepo(repoList,owner,octokit);
            }
            doSearch();

        } catch(e) {
            console.log("Erro: "+e);
            $("#no-results-found").show("fade");

            $loadingAnimation.fadeOut();
        }
    } else {
        try {
            async function doSearch() {
                const result = await octokit.request('GET /orgs/{org}/repos', {
                    org: owner,
                });

                repoList = result.data;
                showRepo(repoList,owner,octokit);
            }
            doSearch();

        } catch(e) {
            console.log("Erro: "+e);
            $("#no-results-found").show("fade");

            $loadingAnimation.fadeOut();
        }
    }
    
}
