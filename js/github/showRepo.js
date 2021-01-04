import { layoutAccordionConstruct } from "./layoutAccordionConstruct.js";

const showContributors = (contributors, repository) => {
    console.log(repository);
    console.log(contributors);
}

export const showRepo = (repoList,owner,octokit) => {
    const $loadingAnimation = $("#loading-animation");

    const $repositoryList = $("#repo-list");
    $repositoryList.html("");

    let repositoryNumber = 1;   
    repoList.forEach(function(repository) {
        var contributors;

        let $repositoryItem = layoutAccordionConstruct(repositoryNumber,repository);
        $repositoryList.append($repositoryItem);

        async function searchForContributors() {
            const result = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
                owner: owner,
                repo: repository.name,
                per_page: 20,
            });

            contributors = result.data;

            showContributors(contributors,repository.name);
        }
        
        searchForContributors();

        repositoryNumber++;
    });

    
    $loadingAnimation.fadeOut();
}