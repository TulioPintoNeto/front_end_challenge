import { filterIssuesByState } from "./filterIssuesByState.js";

export const showIssues = (issues,$repositoryButton) => {
    const $loadingAnimation = $("#loading-animation");

    let $repositoryItem = $repositoryButton.parent().parent();
    var $issuesList = $repositoryItem.find("#issues-list");
    var $openIcon = '<i class="fas fa-exclamation-circle text-success me-2"></i>';
    var $closedIcon = '<i class="fas fa-check-circle text-danger me-2"></i>';

    issues.forEach(function(issue) {
        let $issueItem = $("<li></li>").html(issue.title).addClass("my-2 "+issue.state);

        $issueItem.prepend(
            issue.state == "open" ?
            $openIcon :
            $closedIcon
        );

        $issuesList.append($issueItem);
    });

    $loadingAnimation.fadeOut();

    // GitHub API Filter of Issues
    $(".issue-button").click(function(){
        let $buttonFilterClicked = $(this);
        filterIssuesByState($issuesList,$buttonFilterClicked);
    });
}