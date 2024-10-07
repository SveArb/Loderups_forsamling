var wms_layers = [];


        var lyr_GoogleSatellit_0 = new ol.layer.Tile({
            'title': 'Google Satellit',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_survey_Ingelstorp_1 = new ol.format.GeoJSON();
var features_survey_Ingelstorp_1 = format_survey_Ingelstorp_1.readFeatures(json_survey_Ingelstorp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_Ingelstorp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_Ingelstorp_1.addFeatures(features_survey_Ingelstorp_1);
var lyr_survey_Ingelstorp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_survey_Ingelstorp_1, 
                style: style_survey_Ingelstorp_1,
                popuplayertitle: "survey_Ingelstorp",
                interactive: true,
    title: 'survey_Ingelstorp<br />\
    <img src="styles/legend/survey_Ingelstorp_1_0.png" /> Ingen åtgärd<br />\
    <img src="styles/legend/survey_Ingelstorp_1_1.png" /> Åtgärd 2029<br />\
    <img src="styles/legend/survey_Ingelstorp_1_2.png" /> Åtgärd 2027<br />\
    <img src="styles/legend/survey_Ingelstorp_1_3.png" /> Åtgärd 2025<br />\
    <img src="styles/legend/survey_Ingelstorp_1_4.png" /> Återkommande åtgärd<br />'
        });
var format_Planteringar_2 = new ol.format.GeoJSON();
var features_Planteringar_2 = format_Planteringar_2.readFeatures(json_Planteringar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planteringar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planteringar_2.addFeatures(features_Planteringar_2);
var lyr_Planteringar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planteringar_2, 
                style: style_Planteringar_2,
                popuplayertitle: "Planteringar",
                interactive: true,
                title: '<img src="styles/legend/Planteringar_2.png" /> Planteringar'
            });
var format_survey_Valleberga_3 = new ol.format.GeoJSON();
var features_survey_Valleberga_3 = format_survey_Valleberga_3.readFeatures(json_survey_Valleberga_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_Valleberga_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_Valleberga_3.addFeatures(features_survey_Valleberga_3);
var lyr_survey_Valleberga_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_survey_Valleberga_3, 
                style: style_survey_Valleberga_3,
                popuplayertitle: "survey_Valleberga",
                interactive: true,
    title: 'survey_Valleberga<br />\
    <img src="styles/legend/survey_Valleberga_3_0.png" /> Ingen åtgärd<br />\
    <img src="styles/legend/survey_Valleberga_3_1.png" /> Åtgärd 2029<br />\
    <img src="styles/legend/survey_Valleberga_3_2.png" /> Åtgärd 2027<br />\
    <img src="styles/legend/survey_Valleberga_3_3.png" /> Åtgärd 2025<br />\
    <img src="styles/legend/survey_Valleberga_3_4.png" /> Återkommande åtgärd<br />'
        });
var format_survey_Glemmingebro_4 = new ol.format.GeoJSON();
var features_survey_Glemmingebro_4 = format_survey_Glemmingebro_4.readFeatures(json_survey_Glemmingebro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_Glemmingebro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_Glemmingebro_4.addFeatures(features_survey_Glemmingebro_4);
var lyr_survey_Glemmingebro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_survey_Glemmingebro_4, 
                style: style_survey_Glemmingebro_4,
                popuplayertitle: "survey_Glemmingebro",
                interactive: true,
    title: 'survey_Glemmingebro<br />\
    <img src="styles/legend/survey_Glemmingebro_4_0.png" /> Ingen åtgärd<br />\
    <img src="styles/legend/survey_Glemmingebro_4_1.png" /> Åtgärd 2029<br />\
    <img src="styles/legend/survey_Glemmingebro_4_2.png" /> Åtgärd 2027<br />\
    <img src="styles/legend/survey_Glemmingebro_4_3.png" /> Åtgärd 2025<br />\
    <img src="styles/legend/survey_Glemmingebro_4_4.png" /> Återkommande åtgärd<br />'
        });

lyr_GoogleSatellit_0.setVisible(true);lyr_survey_Ingelstorp_1.setVisible(true);lyr_Planteringar_2.setVisible(true);lyr_survey_Valleberga_3.setVisible(true);lyr_survey_Glemmingebro_4.setVisible(true);
var layersList = [lyr_GoogleSatellit_0,lyr_survey_Ingelstorp_1,lyr_Planteringar_2,lyr_survey_Valleberga_3,lyr_survey_Glemmingebro_4];
lyr_survey_Ingelstorp_1.set('fieldAliases', {'fid': 'fid', 'Nr': 'Nr', 'notes': 'Art', 'unique-id': 'unique-id', 'höjd': 'Höjd', 'dbh': 'Stamdiameter', 'vitalitet': 'Vitalitet', 'rotskador': 'Rotskador', 'stamskador': 'Stamskador', 'kronskador': 'Kronskador', 'svamp': 'Svamp', 'risk': 'Risk', 'skadegörare': 'Skadegörare', 'biologiskt_värde': 'Biologiskt värde', 'bevarandevärde': 'Bevarandevärde', 'skyddsvärt_träd': 'Skyddsvärt Träd', 'åtgärd': 'Åtgärd', 'tidsåtgång': 'Tidsåtgång', 'åtgärdstid': 'Åtgärdstid', 'beskrivning': 'Beskrivning', });
lyr_Planteringar_2.set('fieldAliases', {'fid': 'fid', 'art': 'art', });
lyr_survey_Valleberga_3.set('fieldAliases', {'fid': 'fid', 'Nr': 'Nr', 'notes': 'Art', 'unique-id': 'unique-id', 'höjd': 'Höjd', 'dbh': 'Stamdiameter', 'vitalitet': 'Vitalitet', 'rotskador': 'Rotskador', 'stamskador': 'Stamskador', 'kronskador': 'Kronskador', 'svamp': 'Svamp', 'risk': 'Risk', 'skadegörare': 'Skadegörare', 'biologiskt_värde': 'Biologiskt värde', 'bevarandevärde': 'Bevarandevärde', 'skyddsvärt_träd': 'Skyddsvärt Träd', 'åtgärd': 'Åtgärd', 'tidsåtgång': 'Tidsåtgång', 'åtgärdstid': 'Åtgärdstid', 'beskrivning': 'Beskrivning', });
lyr_survey_Glemmingebro_4.set('fieldAliases', {'fid': 'fid', 'Nr': 'Nr', 'notes': 'Art', 'unique-id': 'unique-id', 'höjd': 'Höjd', 'dbh': 'Stamdiameter', 'vitalitet': 'Vitalitet', 'rotskador': 'Rotskador', 'stamskador': 'Stamskador', 'kronskador': 'Kronskador', 'svamp': 'Svamp', 'risk': 'Risk', 'skadegörare': 'Skadegörare', 'biologiskt_värde': 'Biologiskt värde', 'bevarandevärde': 'Bevarandevärde', 'skyddsvärt_träd': 'Skyddsvärt Träd', 'åtgärd': 'Åtgärd', 'tidsåtgång': 'Tidsåtgång', 'åtgärdstid': 'Åtgärdstid', 'beskrivning': 'Beskrivning', });
lyr_survey_Ingelstorp_1.set('fieldImages', {'fid': 'Hidden', 'Nr': 'TextEdit', 'notes': 'TextEdit', 'unique-id': 'Hidden', 'höjd': 'Range', 'dbh': 'Range', 'vitalitet': 'ValueMap', 'rotskador': 'ValueMap', 'stamskador': 'ValueMap', 'kronskador': 'ValueMap', 'svamp': 'ValueMap', 'risk': 'ValueMap', 'skadegörare': 'TextEdit', 'biologiskt_värde': 'ValueMap', 'bevarandevärde': 'Hidden', 'skyddsvärt_träd': 'ValueMap', 'åtgärd': 'TextEdit', 'tidsåtgång': 'Range', 'åtgärdstid': 'ValueMap', 'beskrivning': 'TextEdit', });
lyr_Planteringar_2.set('fieldImages', {'fid': 'TextEdit', 'art': 'TextEdit', });
lyr_survey_Valleberga_3.set('fieldImages', {'fid': 'Hidden', 'Nr': 'TextEdit', 'notes': 'TextEdit', 'unique-id': 'Hidden', 'höjd': 'Range', 'dbh': 'Range', 'vitalitet': 'ValueMap', 'rotskador': 'ValueMap', 'stamskador': 'ValueMap', 'kronskador': 'ValueMap', 'svamp': 'ValueMap', 'risk': 'ValueMap', 'skadegörare': 'TextEdit', 'biologiskt_värde': 'ValueMap', 'bevarandevärde': 'Hidden', 'skyddsvärt_träd': 'ValueMap', 'åtgärd': 'TextEdit', 'tidsåtgång': 'Range', 'åtgärdstid': 'ValueMap', 'beskrivning': 'TextEdit', });
lyr_survey_Glemmingebro_4.set('fieldImages', {'fid': 'Hidden', 'Nr': 'TextEdit', 'notes': 'TextEdit', 'unique-id': 'Hidden', 'höjd': 'Range', 'dbh': 'Range', 'vitalitet': 'ValueMap', 'rotskador': 'ValueMap', 'stamskador': 'ValueMap', 'kronskador': 'ValueMap', 'svamp': 'ValueMap', 'risk': 'ValueMap', 'skadegörare': 'TextEdit', 'biologiskt_värde': 'ValueMap', 'bevarandevärde': 'Hidden', 'skyddsvärt_träd': 'ValueMap', 'åtgärd': 'TextEdit', 'tidsåtgång': 'Range', 'åtgärdstid': 'ValueMap', 'beskrivning': 'TextEdit', });
lyr_survey_Ingelstorp_1.set('fieldLabels', {'Nr': 'inline label - visible with data', 'notes': 'inline label - visible with data', 'höjd': 'inline label - visible with data', 'dbh': 'inline label - visible with data', 'vitalitet': 'inline label - visible with data', 'rotskador': 'hidden field', 'stamskador': 'hidden field', 'kronskador': 'hidden field', 'svamp': 'hidden field', 'risk': 'inline label - visible with data', 'skadegörare': 'hidden field', 'biologiskt_värde': 'hidden field', 'skyddsvärt_träd': 'hidden field', 'åtgärd': 'inline label - visible with data', 'tidsåtgång': 'hidden field', 'åtgärdstid': 'hidden field', 'beskrivning': 'inline label - visible with data', });
lyr_Planteringar_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'art': 'inline label - visible with data', });
lyr_survey_Valleberga_3.set('fieldLabels', {'Nr': 'inline label - visible with data', 'notes': 'inline label - visible with data', 'höjd': 'inline label - visible with data', 'dbh': 'inline label - visible with data', 'vitalitet': 'inline label - visible with data', 'rotskador': 'hidden field', 'stamskador': 'hidden field', 'kronskador': 'hidden field', 'svamp': 'hidden field', 'risk': 'hidden field', 'skadegörare': 'hidden field', 'biologiskt_värde': 'hidden field', 'skyddsvärt_träd': 'hidden field', 'åtgärd': 'inline label - visible with data', 'tidsåtgång': 'hidden field', 'åtgärdstid': 'hidden field', 'beskrivning': 'inline label - visible with data', });
lyr_survey_Glemmingebro_4.set('fieldLabels', {'Nr': 'inline label - visible with data', 'notes': 'inline label - visible with data', 'höjd': 'inline label - visible with data', 'dbh': 'inline label - visible with data', 'vitalitet': 'inline label - visible with data', 'rotskador': 'hidden field', 'stamskador': 'hidden field', 'kronskador': 'hidden field', 'svamp': 'hidden field', 'risk': 'inline label - visible with data', 'skadegörare': 'hidden field', 'biologiskt_värde': 'hidden field', 'skyddsvärt_träd': 'hidden field', 'åtgärd': 'inline label - visible with data', 'tidsåtgång': 'hidden field', 'åtgärdstid': 'hidden field', 'beskrivning': 'inline label - visible with data', });
lyr_survey_Glemmingebro_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});