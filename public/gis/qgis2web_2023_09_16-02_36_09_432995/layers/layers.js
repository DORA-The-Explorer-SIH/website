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
var format_poptable_1 = new ol.format.GeoJSON();
var features_poptable_1 = format_poptable_1.readFeatures(json_poptable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poptable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poptable_1.addFeatures(features_poptable_1);
var lyr_poptable_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poptable_1, 
                style: style_poptable_1,
                interactive: true,
    title: 'poptable<br />\
    <img src="styles/legend/poptable_1_0.png" /> 0 - 46<br />\
    <img src="styles/legend/poptable_1_1.png" /> 46 - 74<br />\
    <img src="styles/legend/poptable_1_2.png" /> 74 - 100<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_poptable_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poptable_1];
lyr_poptable_1.set('fieldAliases', {'progress': 'progress', 'latitude': 'latitude', 'longitude': 'longitude', 'completed': 'completed', });
lyr_poptable_1.set('fieldImages', {'progress': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'completed': 'CheckBox', });
lyr_poptable_1.set('fieldLabels', {'progress': 'header label', 'latitude': 'no label', 'longitude': 'no label', 'completed': 'no label', });
lyr_poptable_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});