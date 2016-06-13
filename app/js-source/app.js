function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 22.770, lng: -102.546},
    zoom: 10
  });
  map.set('styles', [
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }/*, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { saturation: -100 },
        { invert_lighness: true }
      ]
    }, {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        { hue: '#ffff00' },
        { gamma: 1.4 }
      ]
    }, {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        { visibility: 'off' }
      ]
    }, {
      featureType: 'poi.school',
      elementType: 'geometry',
      stylers: [
        { visibility: 'on' },
        { hue: '#fff700' },
        { lightness: -15 },
        { saturation: 99 }
      ]
    }*/
  ]);
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    position: {lat: 22.770, lng: -102.546},
    map: map,
    icon: iconBase + 'schools_maps.png'
  });

  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('legend'));
  var legend = document.getElementById('legend');
  map.data.loadGeoJson('Zacatecas.json');
  map.data.addListener('click', function(event) {
    //console.log(event.feature);
    map.data.setStyle({ fillColor: 'green' });
    map.data.revertStyles;
    map.data.overrideStyle(event.feature, { fillColor: 'red' });
    /*
    if(event.feature.getProperty('isColorful'))
    {
      event.feature.setProperty('isColorful',false);
    }
    else {
        event.feature.setProperty('isColorful',true);
    }*/
    document.getElementById('legend').innerHTML = "<strong><h1>" + event.feature.H.NOM_MUN + "</h1><strong>";
  });
}
