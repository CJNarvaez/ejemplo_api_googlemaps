function initMap(){var e=document.getElementById("map"),t=new google.maps.Map(e,{center:{lat:22.77,lng:-102.546},zoom:10});t.set("styles",[{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}]);var o="https://maps.google.com/mapfiles/kml/shapes/";new google.maps.Marker({position:{lat:22.77,lng:-102.546},map:t,icon:o+"schools_maps.png"});t.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById("legend"));document.getElementById("legend");t.data.loadGeoJson("Zacatecas.json"),t.data.addListener("click",function(e){t.data.setStyle({fillColor:"green"}),t.data.revertStyles,t.data.overrideStyle(e.feature,{fillColor:"red"}),document.getElementById("legend").innerHTML="<strong><h1>"+e.feature.H.NOM_MUN+"</h1><strong>"})}