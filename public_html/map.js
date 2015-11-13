	
	var query;
	var itemData;

	/* map vars */
	var map;
	var lyrStuff;
	var lyrLocation; var mrkLocation; var mrkLocationCircle;
	var markDest; var lineSatnav; var locLine = false;

	var iconSet = [];
	iconSet['artwork'] = L.icon({
		iconUrl: 'images/light.png',
		iconSize: [30, 30],
		iconAnchor: [15, 15],
		popupAnchor: [15, 15]
	});
	iconSet['camera'] = L.icon({
		iconUrl: 'images/camera.png',
		iconSize: [25, 25],
		iconAnchor: [12, 12]
	});


	function locationsLoaded(ajaxresponse) {
		itemData = $.parseJSON(ajaxresponse.responseText);
		showLocations();
		if(query.goto != undefined) {
			loadSatNav();
		}
	}

	function showLocations() {
		lyrStuff.addData(itemData);
		lyrStuff.eachLayer(function(layer) {
			styleUpLayer(layer);
		});

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
				complete: locationsLoaded
		});

	}

	//define styles for it
	function styleUpLayer(layer) {
		//console.log('styling');
		if (layer.feature.properties.type === 'artwork') {
			layer.setIcon(iconSet['artwork']);
		}
		else if (layer.feature.properties.type === 'traffic-cam') {
			layer.setIcon(iconSet['camera']);
		}
		else if (layer.feature.properties.type === 'area') {
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


	//when the data is loaded & we want to go somewhere
	function loadSatNav() {
		//do we want a line to a location?
		locLine = true;
		//get lat lon
		var destItem = findItem(query.goto);
		locLat = destItem.geometry.coordinates[1];
		locLon = destItem.geometry.coordinates[0];
		//go there
		markDest = L.marker([locLat, locLon]).addTo(map);
		updateNavLine();
	}

	//update a line between you and the destination
	function updateNavLine(pointStart) {
		if(locLine == true) {
			pointEnd = L.latLng(locLat, locLon);
			if(pointStart != null && pointEnd != null) {
				var linePoints = [pointStart, pointEnd];
				var polyline_options = {
					color: '#000'
				};
				if(lineSatnav == undefined) {
					lineSatnav = L.polyline(linePoints, polyline_options);
					lineSatnav.addTo(map);
				} else {
					lineSatnav.setLatLngs(linePoints);
				}
			}
		}
	}

	//find an item in the data. This could move to functions.js and be shared with the art page
	function findItem(longid) {
		if(itemData == 'undefined') {
			return false;
		}
		var result;
		$.each(itemData.features, function(index, item) {
			if(item.properties["long-id"] == longid) {
				result = item;
			}
		});
		return result;
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
			query = getQueryParams(document.location.search);
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


			//when we know where yu are
			function onLocationFound(e) {
				var radius = e.accuracy / 2;
				if(mrkLocation == undefined) {
					mrkLocation = L.marker(e.latlng, {"opacity": 0}).addTo(map);
					mrkLocationCircle = L.circle(e.latlng, radius).addTo(map);
				}
				else {
					mrkLocation.setLatLng(e.latlng);
					mrkLocationCircle.setLatLng(e.latlng);
					mrkLocationCircle.setRadius(radius);
				}
				updateNavLine(e.latlng);
			}
			map.on('locationfound', onLocationFound);

			//every 3secs(3000ms), find where you are
			setInterval(function(){ 
				map.locate({setView: false, maxZoom: 17});
			}, 3000);
			map.locate({setView: false, maxZoom: 17});


});