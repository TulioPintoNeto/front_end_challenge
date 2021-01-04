export const changeSection = $newElement => {
    let $oldElement = $(".active");

    if ($oldElement.attr("id") != $newElement.attr("id")) {
        let $oldSection = $($oldElement.data().target);
        let $newSection = $($newElement.data().target);

        $oldSection.slideUp(function() {
            $newSection.slideDown();
        });

        $oldElement.removeClass("active").attr("aria-expanded", false);
        $newElement.addClass("active").attr("aria-expanded", true);
    }
}