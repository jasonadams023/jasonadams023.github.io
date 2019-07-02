var intervalID;

function setPortfolio() {
    var panels = $('#portfolio-panel .collapse');

    if (panels.length == 0) {
        return;
    }

    panels.on('show.bs.collapse', function (e) {
        var actives = $('#portfolio-panel').find('.in, .collapsing');
        actives.each( function (index, element) {
            $(element).collapse('hide');
        })
    })

    clearInterval(intervalID);
}

intervalID = setInterval(setPortfolio, 500);