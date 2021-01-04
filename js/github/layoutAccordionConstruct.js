export const layoutAccordionConstruct = (repositoryNumber, repository) => {
    let $repositoryItem = $("<div></div>").addClass("accordion-item");
    let $repositoryNameBox = $("<h2></h2>")
        .addClass("accordion-header")
        .attr("id", "heading"+repositoryNumber);
    let $repositoryName = $("<button></button>")
        .addClass("accordion-button")
        .attr("type", "button")
        .attr("data-bs-toggle", "collapse")
        .attr("data-bs-target", "#collapse"+repositoryNumber)
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
    let $contributorsTable = $("<table></table>")
        .addClass("table table-striped")
        .attr("id", "contributor-table"+repositoryNumber)
        .html('\
            <thead>\
                <tr>\
                    <th scope="col">#</th>\
                    <th scope="col">Contributor</th>\
                </tr>\
            </thead>'
        );

    $repositoryItem.append(
        $repositoryNameBox.append(
            $repositoryName
        ),
        $repositoryBodyBox.append(
            $repositoryBody.append(
                $contributorsTable
            )
        )
    );

    return $repositoryItem;
}