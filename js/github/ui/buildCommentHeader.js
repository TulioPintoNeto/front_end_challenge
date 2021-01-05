export const buildCommentHeader = comment => {
    let $commentHeader = $("<div></div>").addClass("card-header");

    let $userPhoto = $('<img></img>')
        .attr("src",comment.user.avatar_url)
        .attr("width", "50px")
        .attr("height", "50px")
        .addClass("rounded-circle");
    let $userTitle = $("<b></b>")
        .html(comment.user.login)
        .addClass("ps-2");
    let $commentDate = new Date(comment.created_at);
    let dateOptions = {
        year: "numeric", month: "short", day: "numeric"
    }

            
    $commentHeader.append(
        $userPhoto,
        $userTitle,
        " commented on ",
        $commentDate.toLocaleDateString('en-GB',dateOptions)
    );

    return $commentHeader;
}