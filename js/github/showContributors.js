export const showContributors = (contributors,$repositoryButton) => {

    let $repositoryItem = $repositoryButton.parent().parent();
    var $fiveHundredList = $repositoryItem.find(".more-then-five-hundred");
    var $twoHundredList = $repositoryItem.find(".more-then-two-hundred");
    var $oneHundredList = $repositoryItem.find(".more-then-one-hundred");
    var $lessOneHundredList = $repositoryItem.find(".less-then-one-hundred");

    contributors.forEach(function(contributor) {
        let $contributorItem = $("<li></li>").text(contributor.login);

        if (contributor.contributions > 500) {
            $fiveHundredList.parent().removeClass("d-none");
            $fiveHundredList.append($contributorItem);
        } else if(contributor.contributions > 200) {
            $twoHundredList.parent().removeClass("d-none");
            $twoHundredList.append($contributorItem);
        } else if(contributor.contributions > 100) {
            $oneHundredList.parent().removeClass("d-none");
            $oneHundredList.append($contributorItem);
        } else {
            $lessOneHundredList.parent().removeClass("d-none");
            $lessOneHundredList.append($contributorItem);
        }
    });
    
}