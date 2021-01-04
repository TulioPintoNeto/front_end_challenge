import { layoutAccordionConstruct } from "./layoutAccordionConstruct.js";
import { searchInRepo } from "./searchInRepo.js";

export const showRepo = (repoList,owner,octokit) => {
    const $loadingAnimation = $("#loading-animation");

    const $repositoryList = $("#repo-list");
    $repositoryList.html("");

    let repositoryNumber = 1;   
    repoList.forEach(function(repository) {
        var contributors;

        let $repositoryItem = layoutAccordionConstruct(repositoryNumber,repository,owner);
        $repositoryList.append($repositoryItem);

        /*async function searchForIssues(repositoryNumber) {
            const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
                owner: owner,
                repo: repository.name,
                per_page: 100,
            })
        }*/

        repositoryNumber++;
    });


    // GitHub API (Contributors and Issue) Search
    $(".accordion-button").click(function(){
        let $repositoryButton = $(this);
        searchInRepo(octokit,$repositoryButton);
    });
    

    $loadingAnimation.fadeOut();
}