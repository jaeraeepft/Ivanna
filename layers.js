var wms_layers = [];

var format_SHPDIIYY_0 = new ol.format.GeoJSON();
var features_SHPDIIYY_0 = format_SHPDIIYY_0.readFeatures(json_SHPDIIYY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPDIIYY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPDIIYY_0.addFeatures(features_SHPDIIYY_0);
var lyr_SHPDIIYY_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPDIIYY_0, 
                style: style_SHPDIIYY_0,
                popuplayertitle: 'SHP DIIYY',
                interactive: true,
                title: '<img src="styles/legend/SHPDIIYY_0.png" /> SHP DIIYY'
            });

lyr_SHPDIIYY_0.setVisible(true);
var layersList = [lyr_SHPDIIYY_0];
lyr_SHPDIIYY_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SHPDIIYY_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SHPDIIYY_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - always visible', 'FCODE': 'header label - always visible', 'REMARK': 'no label', 'METADATA': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SHPDIIYY_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});