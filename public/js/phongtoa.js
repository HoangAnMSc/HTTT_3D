

$.get("/dataphongtoa", function (data) {
    //tạo dữ liệu
    // var uitData = {
    //     "type": "FeatureCollection", "features": [
    //         {"type":"Feature","id":1,"properties":{"name":"Làng Đại Học","density":20},"geometry":{"type":"Polygon","coordinates":[[[106.80376428,10.88587024],[106.80376428,10.88578732],[106.80093556,10.88329971],[106.79650248,10.88139253],[106.79320935,10.88027309],[106.78632753,10.87981702],[106.78219,10.86729558],[106.79080282,10.86688095],[106.79401152,10.86509805],[106.79641805,10.86447611],[106.79857125,10.8642688],[106.80583305,10.869037],[106.81360147,10.87948533],[106.80376428,10.88587024]]]}},
    //         {"type":"Feature","id":2,"properties":{"name":"Bình Thắng","density":5},"geometry":{"type":"Polygon","coordinates":[[[106.80376428,10.88578732],[106.80570949,10.8890724],[106.81340179,10.89756193],[106.82618585,10.89863794],[106.82919924,10.89809994],[106.83102553,10.89872761],[106.83403892,10.89101609],[106.83467813,10.88348371],[106.8407049,10.87299186],[106.83966723,10.87131896],[106.83529442,10.87240856],[106.8313132,10.86888336],[106.82765831,10.86881926],[106.82491715,10.87131896],[106.82341604,10.87567736],[106.81682419,10.8752287],[106.81360147,10.87948533],[106.80376428,10.88578732]]]}},
    //         {"type":"Feature","id":3,"properties":{"name":"Linh Trung","density":50},"geometry":{"type":"Polygon","coordinates":[[[106.78219,10.86729558],[106.77793153,10.8590704],[106.77289598,10.85471062],[106.77516618,10.85027558],[106.79857125,10.8642688],[106.79641805,10.86447611],[106.79401152,10.86509805],[106.79080282,10.86688095],[106.78219,10.86729558]]]}},
    //         {"type":"Feature","id":4,"properties":{"name":"Linh Xuân - Linh Trung","density":110},"geometry":{"type":"Polygon","coordinates":[[[106.77289598,10.85471062],[106.76872857,10.85415907],[106.76406711,10.85733318],[106.76108377,10.86111765],[106.75915703,10.86514623],[106.76226467,10.86691634],[106.76493724,10.87314218],[106.76611815,10.87588883],[106.76680183,10.87875753],[106.77251989,10.88571553],[106.77798934,10.88901137],[106.77929454,10.88650898],[106.7815942,10.88650898],[106.78538552,10.88248069],[106.78271295,10.8818093],[106.78632753,10.87981702],[106.78219,10.86729558],[106.77793153,10.8590704],[106.77289598,10.85471062]]]}},
    //         {"type":"Feature","id":6,"properties":{"name":"Tân phú","density":53},"geometry":{"type":"Polygon","coordinates":[[[106.77516618,10.85027558],[106.77376295,10.84903159],[106.78289941,10.84390403],[106.78706365,10.84530802],[106.78986053,10.84402612],[106.81391366,10.84982514],[106.81395635,10.87013223],[106.80816033,10.87216717],[106.80583305,10.869037],[106.79857125,10.8642688],[106.77516618,10.85027558]]]}},
    //         {"type":"Feature","id":7,"properties":{"name":"Long Bình","density":17},"geometry":{"type":"Polygon","coordinates":[[[106.80816033,10.87216717],[106.81395635,10.87013223],[106.81391366,10.84982514],[106.81904323,10.84337244],[106.82198019,10.84176993],[106.82811518,10.84189813],[106.83718713,10.86125595],[106.83966723,10.87131896],[106.83529442,10.87240856],[106.8313132,10.86888336],[106.82765831,10.86881926],[106.82491715,10.87131896],[106.82341604,10.87567736],[106.81682419,10.8752287],[106.81360147,10.87948533],[106.80816033,10.87216717]]]}},
    //         {"type":"Feature","id":8,"properties":{"name":"Dĩ An","density":487},"geometry":{"type":"Polygon","coordinates":[[[106.79684901,10.9127382],[106.79055845,10.91677876],[106.7764816,10.91823963],[106.76560924,10.92610572],[106.76354921,10.93060054],[106.75965805,10.92767891],[106.75508022,10.92352117],[106.75210463,10.9179025],[106.75313464,10.91599213],[106.74912903,10.91419412],[106.74993015,10.91205898],[106.74088892,10.90857528],[106.73963002,10.89081904],[106.73825667,10.88722271],[106.74901459,10.87901842],[106.75988694,10.89430294],[106.76618147,10.89126858],[106.7680126,10.89497724],[106.77629182,10.88798846],[106.77798934,10.88901137],[106.78426677,10.89072031],[106.78675289,10.89078134],[106.79035775,10.89255131],[106.79116573,10.89413816],[106.79684901,10.9127382]]]}},
    //         {"type":"Feature","id":9,"properties":{"name":"An Bình","density":7},"geometry":{"type":"Polygon","coordinates":[[[106.74901459,10.87901842],[106.75915703,10.86514623],[106.76226467,10.86691634],[106.76611815,10.87588883],[106.76680183,10.87875753],[106.77251989,10.88571553],[106.77629182,10.88798846],[106.7680126,10.89497724],[106.76618147,10.89126858],[106.75988694,10.89430294],[106.74901459,10.87901842]]]}},
    //         {"type":"Feature","id":10,"properties":{"name":"Bình An","density":77},"geometry":{"type":"Polygon","coordinates":[[[106.79684901,10.9127382],[106.80284492,10.90642401],[106.81709609,10.9013043],[106.82062216,10.89816966],[106.81340179,10.89756193],[106.80570458,10.88910801],[106.80506011,10.89064497],[106.79116573,10.89413816],[106.79684901,10.9127382]]]}},
    //         {"type":"Feature","id":11,"properties":{"name":"Bửu Hòa","density":2},"geometry":{"type":"Polygon","coordinates":[[[106.79684901,10.9127382],[106.80605626,10.92545394],[106.81028214,10.92797314],[106.82137508,10.92915864],[106.83035507,10.90589238],[106.83201524,10.90478089],[106.83102553,10.89872761],[106.82919924,10.89809994],[106.82618585,10.89863794],[106.82062216,10.89816966],[106.81709609,10.9013043],[106.80284492,10.90642401],[106.79684901,10.9127382]]]}}
    //     ]
    // };
    // console.log(uitData);
    DatabaseState = Object.values(data)[1];

    array_freature = [];
    for (var i = 0; i < DatabaseState.length; i++) {

        const element = DatabaseState[i];
        var array_point = [];
        for (var j = 0; j < element.Poly.points.length; j++) {
            const point = element.Poly.points[j];
            var GetPoint = [point.y, point.x];
            array_point.push(GetPoint);
        }

        var create_json = { "type": "Feature", "id": element.ID, "properties": { "name": element.nameVung, "density": element.Soca , "dientich": element.dientich}, "geometry": { "type": "Polygon", "coordinates": [array_point]} }

        array_freature.push(create_json);
    }
    var uitData = { "type": "FeatureCollection", "features": array_freature };

    var map = L.map('map').setView([10.869596, 106.803244], 14);//set view và zoom mặc định

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // tạo tab div để hiển thị thông tin
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h4> Vùng những người dương tính với Covid19 </h4>' + (props ?
            '<b> Vùng:' + props.name + '</b><br><b>Diện Tích: '+ props.dientich +' m<sup>2</sup></b><br><b>' + props.density + ' người dương tính.</b>'
            : 'Đưa chuột lên vùng để xem thêm thông tin');
    };

    info.addTo(map);

    //Tạo màu cho từng số lượng người trong vùng dịch
    function getColor(d) {
        return  d > 500 ? '#FF0000' :
                d > 100 ? '#FF3300' :
                d > 10 ? '#FFCC00' :
                         '#00FF00';
    }

    function style(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.density)
        };
    }
    //Kẻ viền ngoài của từng feature
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties);
    }

    var geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }


    geojson = L.geoJson(uitData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    map.attributionControl.addAttribution('Vùng những người bị dương tính với covid19 <a href ="">COVID19 DATA</a>');

    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 100, 500],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(map);
});