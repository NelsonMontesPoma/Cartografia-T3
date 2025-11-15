var wms_layers = [];

var format_PROV_LaLibertad_0 = new ol.format.GeoJSON();
var features_PROV_LaLibertad_0 = format_PROV_LaLibertad_0.readFeatures(json_PROV_LaLibertad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROV_LaLibertad_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROV_LaLibertad_0.addFeatures(features_PROV_LaLibertad_0);
var lyr_PROV_LaLibertad_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROV_LaLibertad_0, 
                style: style_PROV_LaLibertad_0,
                popuplayertitle: 'PROV_LaLibertad',
                interactive: true,
    title: 'PROV_LaLibertad<br />\
    <img src="styles/legend/PROV_LaLibertad_0_0.png" /> ASCOPE<br />\
    <img src="styles/legend/PROV_LaLibertad_0_1.png" /> BOLIVAR<br />\
    <img src="styles/legend/PROV_LaLibertad_0_2.png" /> CHEPEN<br />\
    <img src="styles/legend/PROV_LaLibertad_0_3.png" /> GRAN CHIMU<br />\
    <img src="styles/legend/PROV_LaLibertad_0_4.png" /> JULCAN<br />\
    <img src="styles/legend/PROV_LaLibertad_0_5.png" /> OTUZCO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_6.png" /> PACASMAYO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_7.png" /> PATAZ<br />\
    <img src="styles/legend/PROV_LaLibertad_0_8.png" /> SANCHEZ CARRION<br />\
    <img src="styles/legend/PROV_LaLibertad_0_9.png" /> SANTIAGO DE CHUCO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_10.png" /> TRUJILLO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_11.png" /> VIRU<br />' });
var format_Rios_LaLibertad_1 = new ol.format.GeoJSON();
var features_Rios_LaLibertad_1 = format_Rios_LaLibertad_1.readFeatures(json_Rios_LaLibertad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_LaLibertad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_LaLibertad_1.addFeatures(features_Rios_LaLibertad_1);
var lyr_Rios_LaLibertad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_LaLibertad_1, 
                style: style_Rios_LaLibertad_1,
                popuplayertitle: 'Rios_LaLibertad',
                interactive: true,
    title: 'Rios_LaLibertad<br />\
    <img src="styles/legend/Rios_LaLibertad_1_0.png" /> Río Principal<br />\
    <img src="styles/legend/Rios_LaLibertad_1_1.png" /> Río Secundario<br />' });
var format_RVD_LaLibertad_2 = new ol.format.GeoJSON();
var features_RVD_LaLibertad_2 = format_RVD_LaLibertad_2.readFeatures(json_RVD_LaLibertad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVD_LaLibertad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_LaLibertad_2.addFeatures(features_RVD_LaLibertad_2);
var lyr_RVD_LaLibertad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_LaLibertad_2, 
                style: style_RVD_LaLibertad_2,
                popuplayertitle: 'RVD_LaLibertad',
                interactive: true,
    title: 'RVD_LaLibertad<br />\
    <img src="styles/legend/RVD_LaLibertad_2_0.png" /> Afirmado<br />\
    <img src="styles/legend/RVD_LaLibertad_2_1.png" /> Pavimento Asfaltico<br />\
    <img src="styles/legend/RVD_LaLibertad_2_2.png" /> Pavimento de Concreto<br />\
    <img src="styles/legend/RVD_LaLibertad_2_3.png" /> Proyectado<br />\
    <img src="styles/legend/RVD_LaLibertad_2_4.png" /> Sin Afirmar<br />\
    <img src="styles/legend/RVD_LaLibertad_2_5.png" /> Trocha Carrozable<br />' });
var format_IIEE_LaLibertad_3 = new ol.format.GeoJSON();
var features_IIEE_LaLibertad_3 = format_IIEE_LaLibertad_3.readFeatures(json_IIEE_LaLibertad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IIEE_LaLibertad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IIEE_LaLibertad_3.addFeatures(features_IIEE_LaLibertad_3);
var lyr_IIEE_LaLibertad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IIEE_LaLibertad_3, 
                style: style_IIEE_LaLibertad_3,
                popuplayertitle: 'IIEE_LaLibertad',
                interactive: true,
    title: 'IIEE_LaLibertad<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_4.png" /> Básica Especial - PRITE<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_5.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_6.png" /> Escuela Superior Tecnológica<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_7.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_8.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_9.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_10.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_11.png" /> Primaria<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_12.png" /> Secundaria<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_13.png" /> Superior Formación Artística<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_14.png" /> Superior Pedagógica<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_15.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/IIEE_LaLibertad_3_16.png" /> Técnico Productiva - CETPRO<br />' });

lyr_PROV_LaLibertad_0.setVisible(true);lyr_Rios_LaLibertad_1.setVisible(true);lyr_RVD_LaLibertad_2.setVisible(true);lyr_IIEE_LaLibertad_3.setVisible(true);
var layersList = [lyr_PROV_LaLibertad_0,lyr_Rios_LaLibertad_1,lyr_RVD_LaLibertad_2,lyr_IIEE_LaLibertad_3];
lyr_PROV_LaLibertad_0.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'Nombre de provincia', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'Superficie (ha)', 'Web': 'Web informativa', 'Videos': 'Video informativo', 'Imagen': 'Imagen referencial', });
lyr_Rios_LaLibertad_1.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_RVD_LaLibertad_2.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'Rodadura', 'COD_DS11': 'COD', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'Departamento', 'PROV': 'Provincia', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'Longitud (km) ', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'Distrito', 'CAPITAL': 'CAPITAL', });
lyr_IIEE_LaLibertad_3.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_PROV_LaLibertad_0.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'TextEdit', 'Web': 'TextEdit', 'Videos': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Rios_LaLibertad_1.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_RVD_LaLibertad_2.set('fieldImages', {'fid': 'Hidden', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'TextEdit', 'OBS': 'Hidden', 'SENTIDO': 'Hidden', 'BASE': 'Hidden', 'DATA': 'Hidden', 'FECHA_ACTU': 'Hidden', 'FUENTE': 'Hidden', 'COD_RODADU': 'Hidden', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'Hidden', });
lyr_IIEE_LaLibertad_3.set('fieldImages', {'fid': 'Hidden', 'Código Modular': 'Hidden', 'Anexo': 'Hidden', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'Hidden', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'Hidden', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'Hidden', 'Código Local': 'Hidden', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'Hidden', 'Altitud': 'Hidden', 'Fuente de coordenadas': 'Hidden', });
lyr_PROV_LaLibertad_0.set('fieldLabels', {'NOMBPROV': 'header label - always visible', 'ha': 'header label - always visible', 'Web': 'header label - always visible', 'Videos': 'header label - always visible', 'Imagen': 'header label - always visible', });
lyr_Rios_LaLibertad_1.set('fieldLabels', {'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_RVD_LaLibertad_2.set('fieldLabels', {'RODADURA': 'header label - always visible', 'COD_DS11': 'header label - always visible', 'DEP': 'header label - always visible', 'PROV': 'header label - always visible', 'LONG_KM': 'header label - always visible', 'NOMBDIST': 'header label - always visible', });
lyr_IIEE_LaLibertad_3.set('fieldLabels', {'Nombre de SS.EE.': 'header label - always visible', 'Departamento': 'header label - always visible', 'Provincia': 'header label - always visible', 'Distrito': 'header label - always visible', 'DRE / UGEL': 'header label - always visible', 'Centro Poblado': 'header label - always visible', 'Dirección': 'header label - always visible', 'Nivel / Modalidad': 'header label - always visible', });
lyr_IIEE_LaLibertad_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});