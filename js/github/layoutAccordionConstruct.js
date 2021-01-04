export const layoutAccordionConstruct = (repositoryNumber, repository, owner) => {
    let $repositoryItem = $("<div></div>").addClass("accordion-item");
    let $repositoryNameBox = $("<h2></h2>")
        .addClass("accordion-header")
        .attr("id", "heading"+repositoryNumber);
    let $repositoryName = $("<button></button>")
        .addClass("accordion-button")
        .attr("type", "button")
        .attr("data-bs-toggle", "collapse")
        .attr("data-bs-target", "#collapse"+repositoryNumber)
        .attr("data-owner", owner)
        .attr("aria-expanded", false)
        .attr("aria-controls", "collapse"+repositoryNumber)
        .html(repository.name);
    let $repositoryBodyBox = $("<div></div>")
        .attr("id", "collapse"+repositoryNumber)
        .addClass("accordion-collapse collapse")
        .attr("aria-labelledby", "heading"+repositoryNumber)
        .attr("data-bs-parent", "#repo-list");
    let $repositoryBody = $("<div></div>")
        .addClass("accordion-body");
    let $contributorsList = $("<div></div>")
        .attr("id","contributors-list"+repositoryNumber)
        .html('\
            <h4>Contributors</h4>\
            <div class="d-none">\
                <p>500+:</p>\
                <ul class="more-then-five-hundred"></ul>\
            </div>\
            <div class="d-none">\
                <p>200+:</p>\
                <ul class="more-then-two-hundred"></ul>\
            </div>\
            <div class="d-none">\
                <p>100+:</p>\
                <ul class="more-then-one-hundred"></ul>\
            </div>\
            <div class="d-none">\
                <p>1-100:</p>\
                <ul class="less-then-one-hundred"></ul>\
            </div>\
        ');

    $repositoryItem.append(
        $repositoryNameBox.append(
            $repositoryName
        ),
        $repositoryBodyBox.append(
            $repositoryBody.append(
                $contributorsList
            )
        )
    );

    return $repositoryItem;
}