
var query;
var thisArt;

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function dataLoaded(ajaxresponse) {
	ajaxresponse = $.parseJSON(ajaxresponse.responseText);
	//get the one we want
	$.each(ajaxresponse.features, function(index, item) {
		if(item.properties["long-id"] == query.art) {
			thisArt = item;
		}
	});

	loadArt();
}

function loadArt() {
	$('.art-half img').attr('src', thisArt.properties['img-url']);
	$('h2').html(thisArt.properties['title']);
	$('.details').html(
		"<p><strong>"+ thisArt.properties['subtitle'] +"</strong></p>"
		+"<p>"+ thisArt.properties['excert'] + thisArt.properties['excerpt'] +"</p>"
		+"<p><a href='"+ thisArt.properties['url'] + "'>official page</a></p>"
	);

	if(thisArt.properties['nearby'] != undefined) {
		$('.nearby').html("Nearby: ");
		$.each(thisArt.properties['nearby'], function(index, item) {
			$('.nearby').append('<a href="art.html?art='+ item["long-id"] +'">'+ item.title +'</a>');
			if(index < (thisArt.properties['nearby'].length - 1)) {
				$('.nearby').append(' | ');
			}
		});
	} else {
		$('.nearby').html("");
	}
	//console.log(thisArt.properties['title']);
}

$( document ).ready(function() {
	query = getQueryParams(document.location.search);

	$.ajax({
			url: 'lumiere-durham.geojson',
			dataType: 'json',
			data: '',
			complete: dataLoaded
	});


});