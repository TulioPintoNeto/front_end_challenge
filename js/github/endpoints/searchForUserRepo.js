import { showRepo } from "../ui/showRepo.js";

export async function searchForUserRepo(owner,octokit) {
    const $loadingAnimation = $("#loading-animation");

    var result;

    try {
        result = await octokit.request('GET /users/{username}/repos', {
            username: owner,
            per_page: 100,
        });
    } catch (error) {
        console.log(error);
        $("#no-results-found").show("fade");
        $loadingAnimation.fadeOut();
        return;
    }
    
    let repoList = result.data;
    showRepo(repoList,owner,octokit);
}