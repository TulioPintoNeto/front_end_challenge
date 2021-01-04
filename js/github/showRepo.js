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

        repositoryNumber++;
    });
    
    $loadingAnimation.fadeOut();

    // GitHub API (Contributors and Issue) Search
    $(".accordion-button").click(function(){
        let $repositoryButton = $(this);
        
        if (!$repositoryButton.hasClass("loaded")) {
            $repositoryButton.addClass("loaded");
            searchInRepo(octokit,$repositoryButton);
        }
    });
}