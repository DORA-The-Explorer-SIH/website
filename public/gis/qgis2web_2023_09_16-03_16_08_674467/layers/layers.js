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
var format_Gis4_1 = new ol.format.GeoJSON();
var features_Gis4_1 = format_Gis4_1.readFeatures(json_Gis4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gis4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gis4_1.addFeatures(features_Gis4_1);
var lyr_Gis4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gis4_1, 
                style: style_Gis4_1,
                interactive: true,
    title: 'Gis4<br />\
    <img src="styles/legend/Gis4_1_0.png" /> 1<br />\
    <img src="styles/legend/Gis4_1_1.png" /> 2<br />\
    <img src="styles/legend/Gis4_1_2.png" /> 3<br />\
    <img src="styles/legend/Gis4_1_3.png" /> 4<br />\
    <img src="styles/legend/Gis4_1_4.png" /> 5<br />\
    <img src="styles/legend/Gis4_1_5.png" /> 6<br />\
    <img src="styles/legend/Gis4_1_6.png" /> 7<br />\
    <img src="styles/legend/Gis4_1_7.png" /> 8<br />\
    <img src="styles/legend/Gis4_1_8.png" /> 9<br />\
    <img src="styles/legend/Gis4_1_9.png" /> 10<br />\
    <img src="styles/legend/Gis4_1_10.png" /> 11<br />\
    <img src="styles/legend/Gis4_1_11.png" /> 12<br />\
    <img src="styles/legend/Gis4_1_12.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Gis4_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gis4_1];
lyr_Gis4_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Value': 'Value', });
lyr_Gis4_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Value': 'Range', });
lyr_Gis4_1.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Value': 'no label', });
lyr_Gis4_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});