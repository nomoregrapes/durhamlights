	
	var map;
	var lyrStuff;

	function showLocations(ajaxresponse) {
		ajaxresponse = $.parseJSON(ajaxresponse.responseText);
		lyrStuff.addData(ajaxresponse);
		lyrStuff.eachLayer(function(layer) {
			styleUpLayer(layer);
		});

		//as we don't have data, do this...
		//mixItUp();

		//if marker is clicked
		lyrStuff.on('click', function(e) {
			if (e.layer.feature.properties.type !== 'area') {
				//markerInfo(e.layer.feature);
				window.location = "art.html?art=" + e.layer.feature.properties['long-id'];
			};
		});
	}
	function getStuffLocations() {
		var data = '';
		$.ajax({
				url: 'lumiere-durham.geojson',
				dataType: 'json',
				data: data,
				complete: showLocations
		});

	}

	/** caution, this function changes the data and then updates the style **/
	function mixItUp() {
		lyrStuff.eachLayer(function(layer) {
			if(layer.toGeoJSON().properties.cat == null) {
				cats = ['green', 'blue', 'red', 'purple', 'yellow', 'cafe', 'venue', 'unknown'];
				newcat = cats[Math.floor(Math.random()*cats.length)];
				layer.toGeoJSON().properties.cat = newcat;
				styleUpLayer(layer);
			}
		});
	}

	//define styles for it
	function styleUpLayer(layer) {
		//console.log('styling');
		/*
		if (layer.toGeoJSON().properties.category === 'yellow') {
			//styling for markers
			layer.setStyle({
				fillColor: "#4daf4a",
				fillOpacity: 0.8,
				stroke: false
			});
		}
		*/
		if (layer.feature.properties.type === 'area') {
			layer.setStyle({
				fillColor: "#fbe171",
				fillOpacity: 0.5,
				stroke: false, /* y u no work if I set you as a colour? */
				strokeColor: "#fbe171",
				strokeOpacity: 0.8,
				strokeWidth: 10
			});
		}
		else {
			//for areas?
			/*
			layer.setStyle({
				fillColor: "#fbe171",
				fillOpacity: 0.8,
				stroke: false
			});
			*/
		}
	}


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


$( document ).ready(function() {

			//map = L.mapbox.map('map').setView([52.92, -1.08], 6); //UK
			map = L.mapbox.map('map').setView([54.77281, -1.57648], 15); // Durham Cathedral 54.77281/-1.57648


			//geolocate
			var query = getQueryParams(document.location.search);
			if(query.locate != 'no') {
				map.locate({setView: true, maxZoom: 19});
			}


			//more base layers
			/*
			var OSMLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Base map &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			});
			map.addLayer(OSMLayer);
			*/

			var Thunderforest_Outdoors = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
				attribution: 'Maps &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
			});
			map.addLayer(Thunderforest_Outdoors);

			//get ready for data
			var baseJson = {
				"type":"FeatureCollection",
				"features":[
				]
			};
			lyrStuff = L.geoJson(baseJson, {
				//onEachFeature: attachClickEvent
			});
			map.addLayer(lyrStuff);


			//load data
			getStuffLocations();

});