$('#portfolio-panel .collapse').on('show.bs.collapse', function (e) {
    var actives = $('#portfolio-panel').find('.in, .collapsing');
    actives.each( function (index, element) {
        $(element).collapse('hide');
    })
})