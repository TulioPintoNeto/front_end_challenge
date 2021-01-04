export const filterIssuesByState = ($issuesList,$buttonFilterClicked) => {
    let $openIssues = $issuesList.find(".open");
    let $closedIssues = $issuesList.find(".closed");
    let filter = $buttonFilterClicked.html();

    switch(filter) {
        case "Abertas":
            $closedIssues.hide();
            $openIssues.show();
            break;
        case "Fechadas":
            $openIssues.hide();
            $closedIssues.show();
            break;
        case "Ambas":
            $openIssues.show();
            $closedIssues.show();
    }
}