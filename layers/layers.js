ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([97.354107, 12.813512, 108.281768, 18.968284]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'เส้นทาง',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> เส้นทาง'
            });
var format_RSC_2 = new ol.format.GeoJSON();
var features_RSC_2 = format_RSC_2.readFeatures(json_RSC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RSC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSC_2.addFeatures(features_RSC_2);
cluster_RSC_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RSC_2
});
var lyr_RSC_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RSC_2, 
                style: style_RSC_2,
                popuplayertitle: 'RSC',
                interactive: true,
                title: '<img src="styles/legend/RSC_2.png" /> RSC'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_RSC_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_RSC_2];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'Name': 'Name', });
lyr_RSC_2.set('fieldAliases', {'id': 'id', 'rsc': 'rsc', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_RSC_2.set('fieldImages', {'id': 'TextEdit', 'rsc': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_RSC_2.set('fieldLabels', {'id': 'no label', 'rsc': 'no label', });
lyr_RSC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});