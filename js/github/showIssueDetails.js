import { buildComment } from "./ui/buildComment.js";

export const showIssueDetails = (issueTitle,issue,comments) => {

    var $issueModal = $("#issueModal");
    var issueModal = new bootstrap.Modal($issueModal[0], null);
    
    let $modalBody = $issueModal.find(".modal-body");

    $issueModal.find(".modal-title").html(issueTitle);
    
    $modalBody.html("");

    let $comment = buildComment(issue);
    $modalBody.append($comment);

    comments.forEach(function (comment) {
        $comment = buildComment(comment);
        $modalBody.append($comment);
    });

    issueModal.show();
}
