var gmapa_dispersion = {};
google.charts.load('current', {
  'packages': ['geochart'],
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'XXXXX'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  //mapa listo
  gmapa_dispersion = new google.visualization.GeoChart(document.getElementById('regions_div'));
  //Cargamos datos a arreglo de gmapData
  var gmapData = [];
  gmapData.push(['States', 'Estado', 'Visitantes']);
  //definimos columnas States (clave ISO), Estado (etiqueta de region), Visitantes (dato numerico a graficar)
  for (d in regiones_ISO) {
    gmapData.push([regiones_ISO[d].clave, regiones_ISO[d].entidad, regiones_ISO[d].cuenta])
  } //cargamos los datos de regiones_ISO al arreglo de gmapData
  gmapData = google.visualization.arrayToDataTable(gmapData);
  //conversion de arreglo a DataTable para google
  gmapa_dispersion.draw(gmapData, {
    displayMode: 'regions', //indicamos al mapa que se centre en una region en lugar de global
    region: 'MX', //region a mostrar es solo Mexico
    resolution: 'provinces' //mostrar "division politica" entre estados
  });
}

    function myClickHandler(){
        var selection = chart.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                message += '{row:' + item.row + ',column:' + item.column + '}';
            } else if (item.row != null) {
                message += '{row:' + item.row + '}';
            } else if (item.column != null) {
                message += '{column:' + item.column + '}';
            }
        }
        if (message == '') {
            message = 'nothing';
        }
        alert('You selected ' + message);
    }
google.visualization.events.addListener(chart, 'select', myClickHandler);
var regiones_ISO = [{
    'entidad': 'Aguascalientes',
    'cuenta': 34500,
    'clave': 'MX-AGU'
  },
  {
    'entidad': 'Baja California',
    'cuenta': 45600,
    'clave': 'MX-BCN'
  },
  {
    'entidad': 'Baja California Sur',
    'cuenta': 57600,
    'clave': 'MX-BCS'
  },
  {
    'entidad': 'Campeche',
    'cuenta': 67800,
    'clave': 'MX-CAM'
  },
  {
    'entidad': 'Chiapas',
    'cuenta': 78900,
    'clave': 'MX-CHP'
  },
  {
    'entidad': 'Chihuaha',
    'cuenta': 89000,
    'clave': 'MX-CHH'
  },
  {
    'entidad': 'Coahuila',
    'cuenta': 90000,
    'clave': 'MX-COA'
  },
  {
    'entidad': 'Colima',
    'cuenta': 90100,
    'clave': 'MX-COL'
  },
  {
    'entidad': 'Ciudad de México',
    'cuenta': 12000,
    'clave': 'MX-DIF'
  },
  {
    'entidad': 'Durango',
    'cuenta': 23400,
    'clave': 'MX-DUR'
  },
  {
    'entidad': 'Guanajuato',
    'cuenta': 23450,
    'clave': 'MX-GUA'
  },
  {
    'entidad': 'Guerrero',
    'cuenta': 34560,
    'clave': 'MX-GRO'
  },
  {
    'entidad': 'Hidalgo',
    'cuenta': 45670,
    'clave': 'MX-HID'
  },
  {
    'entidad': 'Jalisco',
    'cuenta': 56780,
    'clave': 'MX-JAL'
  },
  {
    'entidad': 'México',
    'cuenta': 67890,
    'clave': 'MX-MEX'
  },
  {
    'entidad': 'Michoacán',
    'cuenta': 78901,
    'clave': 'MX-MIC'
  },
  {
    'entidad': 'Morelos',
    'cuenta': 89012,
    'clave': 'MX-MOR'
  },
  {
    'entidad': 'Nayarit',
    'cuenta': 90123,
    'clave': 'MX-NAY'
  },
  {
    'entidad': 'Nuevo León',
    'cuenta': 91234,
    'clave': 'MX-NLE'
  },
  {
    'entidad': 'Oaxaca',
    'cuenta': 12345,
    'clave': 'MX-OAX'
  },
  {
    'entidad': 'Puebla',
    'cuenta': 23456,
    'clave': 'MX-PUE'
  },
  {
    'entidad': 'Querétaro',
    'cuenta': 34567,
    'clave': 'MX-QUE'
  },
  {
    'entidad': 'Qintana Roo',
    'cuenta': 45678,
    'clave': 'MX-ROO'
  },
  {
    'entidad': 'San Luis Potosí',
    'cuenta': 56789,
    'clave': 'MX-SLP'
  },
  {
    'entidad': 'Sinaloa',
    'cuenta': 67890,
    'clave': 'MX-SIN'
  },
  {
    'entidad': 'Sonora',
    'cuenta': 98765,
    'clave': 'MX-SON'
  },
  {
    'entidad': 'Tabasco',
    'cuenta': 87654,
    'clave': 'MX-TAB'
  },
  {
    'entidad': 'Tamaulipas',
    'cuenta': 76543,
    'clave': 'MX-TAM'
  },
  {
    'entidad': 'Tlaxcala',
    'cuenta': 65432,
    'clave': 'MX-TLA'
  },
  {
    'entidad': 'Veracruz',
    'cuenta': 54321,
    'clave': 'MX-VER'
  },
  {
    'entidad': 'Yucatán',
    'cuenta': 43210,
    'clave': 'MX-YUC'
  },
  {
    'entidad': 'Zacatecas',
    'cuenta': 32109,
    'clave': 'MX-ZAC'
  },
]
