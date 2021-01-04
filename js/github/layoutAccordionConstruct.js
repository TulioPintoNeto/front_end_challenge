export const layoutAccordionConstruct = (repositoryNumber, repository, owner) => {
    let $repositoryItem = $("<div></div>").addClass("accordion-item");
    let $repositoryNameBox = $("<h2></h2>")
        .addClass("accordion-header")
        .attr("id", "heading"+repositoryNumber);
    let $repositoryName = $("<button></button>")
        .addClass("accordion-button collapsed")
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
        .addClass("accordion-body row");
    let $contributorsList = $("<div></div>")
        .addClass("col-md-12")
        .html('\
            <h4 class="text-center">Contributors</h4>\
            <div class="d-none">\
                <p><b>500+ contribuições:</b></p>\
                <ul class="more-then-five-hundred"></ul>\
            </div>\
            <div class="d-none">\
                <p><b>200+ contribuições:</b></p>\
                <ul class="more-then-two-hundred"></ul>\
            </div>\
            <div class="d-none">\
                <p><b>100+ contribuições:</b></p>\
                <ul class="more-then-one-hundred"></ul>\
            </div>\
            <div class="d-none">\
                <p><b>1-100 contribuições:</b></p>\
                <ul class="less-then-one-hundred"></ul>\
            </div>\
        ');
    let $issuesList = $("<div></div>")
        .addClass("col-md-12 text-center")
        .html('\
            <h4 class="text-center">Issues</h4>\
            <div class="btn-group mx-auto" role="group" aria-label="Filtro de Issues">\
                <button type="button" class="btn btn-primary issue-button" data-repo="'+repository.name+'">Fechadas</button>\
                <button type="button" class="btn btn-primary issue-button" data-repo="'+repository.name+'">Abertas</button>\
                <button type="button" class="btn btn-primary issue-button" data-repo="'+repository.name+'">Ambas</button>\
            </div>\
            <ul id="issues-list">\
            </ul>\
        ');

    $repositoryItem.append(
        $repositoryNameBox.append(
            $repositoryName
        ),
        $repositoryBodyBox.append(
            $repositoryBody.append(
                $contributorsList,
                $issuesList
            )
        )
    );

    return $repositoryItem;
}