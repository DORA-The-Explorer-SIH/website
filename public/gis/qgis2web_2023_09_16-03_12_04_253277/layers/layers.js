var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gis2_1 = new ol.format.GeoJSON();
var features_Gis2_1 = format_Gis2_1.readFeatures(json_Gis2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gis2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gis2_1.addFeatures(features_Gis2_1);
var lyr_Gis2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gis2_1, 
                style: style_Gis2_1,
                interactive: true,
    title: 'Gis2<br />\
    <img src="styles/legend/Gis2_1_0.png" /> 10 - 81<br />\
    <img src="styles/legend/Gis2_1_1.png" /> 81 - 138<br />\
    <img src="styles/legend/Gis2_1_2.png" /> 138 - 199<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Gis2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gis2_1];
lyr_Gis2_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Value': 'Value', });
lyr_Gis2_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Value': 'Range', });
lyr_Gis2_1.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Value': 'no label', });
lyr_Gis2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});