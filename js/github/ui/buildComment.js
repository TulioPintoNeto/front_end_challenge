import { buildCommentHeader } from "./buildCommentHeader.js";
import { buildCommentBody } from "./buildCommentBody.js";

export const buildComment = issue => {
    let $comment = $("<div></div>").addClass("card mb-4");

    let $commentHeader = buildCommentHeader(issue);
    let $commentBody = $("<div></div>").addClass("card-body");
    let $commentBodyContent = buildCommentBody(issue.body);
    
    $comment.append(
        $commentHeader,
        $commentBody.append(
            $commentBodyContent
        )
    )

    return $comment;
}