
$.get("/store", function (data) {
    DatabaseDT = Object.values(data)[1];

    var mapObj = null;
    //--------------------------------Layer Map---------------------------------------------
    var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { id: 'MapID', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });


    var defaultCoord = [10.869596, 106.803244]; // coord mặc định, UIT
    var zoomLevel = 16; // Mức phóng to bản đồ

    //---------------------------------------------------------------------------------------------------------------------

    //--------------------------------Marker ---------------------------------------------


    var layers_array = [];

    for (let index = 0; index < DatabaseDT.length; index++) {

        const element = [DatabaseDT[index].x, DatabaseDT[index].y];
     
        var Duongtinh = element; // Toạ độ marker
        var option = {
            className: "map-popup-content",
        };
        let text = DatabaseDT[index].NgayBiDuongTinh;
        let NgayBiDuongTinh = text.substring(0,10);
        // html cho popup
        var content = `<div class='left'>
                                <img src='https://tse1.mm.bing.net/th?id=OIP.3dDSNCoBmkd2mutd09WJwwHaHa&pid=Api' />
                            </div>
                            <div class='right'>
                                <b>Ca thứ `+ DatabaseDT[index].ID + `</b><br><b>Ngày bị dương tính:<br> ${NgayBiDuongTinh}</b>
                            </div>
                            <div class='clearfix'></div>`;

        var popup = L.popup(option);
        popup.setContent(content);
        var Icon = new L.Icon({
            iconUrl: 'img/icon/duongtinh.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        var marker = L.marker(Duongtinh, {
            icon: Icon
        }
        );
        marker.bindPopup(popup);

        layers_array.push(marker);

        // binding popup vào marker


    }
    //-----------------------------------------------------------------------------------------------------------
    var duongtinh = L.layerGroup(layers_array);
    var mapConfig = {
        attributionControl: true, // để ko hiện watermark nữa, nếu bị liên hệ đòi thì nhớ open nha
        center: defaultCoord, // vị trí map mặc định hiện tại
        zoom: zoomLevel,
        layers: [streets, duongtinh]
    };

    mapObj = L.map('map', mapConfig);

    // var baseMaps = {
    //     "Streets": streets
    // };

    var overlayMaps = {

        "<img src='img/icon/duongtinh.png' /><span class='my-layer-item'>Ca F0</span>": duongtinh

    }

    L.control.layers([], overlayMaps,).addTo(mapObj);











    var x_new, y_new;


    mapObj.on("click", addMarker);

    function addMarker(e) {
        // Add marker to map at click location
        const markerPlace = document.querySelector(".marker-position");
        markerPlace.textContent = `new marker: ${e.latlng.lat}, ${e.latlng.lng}`;
        x_new = e.latlng.lat, y_new = e.latlng.lng;
        const markerClick = new L.marker(e.latlng, {
            draggable: true
        })
            .addTo(mapObj)
            .bindPopup(FindDistance + buttonRemove);

        // event remove  and add marker
        markerClick.on("popupopen", ClickMarker);

        // event draged marker
        markerClick.on("dragend", dragedMaker);
    }
    const FindDistance = '<button type="button" class="KT_KC">Kiểm tra khoảng cách 💔</button>';
    const buttonRemove =
        '<button type="button" class="remove">Xóa</button>';


    //function for ajax

    var polyline;
    // remove marker
    function ClickMarker() {
        const marker = this;
        const btn = document.querySelector(".remove");
        btn.addEventListener("click", function () {
            const markerPlace = document.querySelector(".marker-position");
            markerPlace.textContent = "Goodbye marker 🌱";
            mapObj.removeLayer(marker);
            mapObj.removeLayer(polyline);
        });
        const btnClick = document.querySelector(".KT_KC");
        btnClick.addEventListener("click", function (event) {

        $.ajax({
                type:'POST',
                datatype:'JSON',
               
                data:{
                    x_new: x_new,
                    y_new: y_new
                },
                crossDomain: true,
                url:'/tinhtoan',
                success: function (result) {
              
                    console.log("Đúng cmnr");
                    var data = JSON.parse(result);
                    var latlngs = [
                        [x_new, y_new],
                        [data.x, data.y]
                    ];
                    var bindPopup_line='Khoảng cách:'+data.KC+' mét'
                     polyline = L.polyline(latlngs, {color: 'red'}).bindPopup(bindPopup_line).addTo(mapObj);
                    mapObj.fitBounds(polyline.getBounds());
                    
                    console.log(data);
                    return result;
                  
                },
                error: function(result){
                    console.log(result);
                    console.log("Sai cmnr");
                }

            });
           

            //   });
        });

    }

    // draged
    function dragedMaker() {
        const markerPlace = document.querySelector(".marker-position");
        markerPlace.textContent = `change position: ${this.getLatLng().lat}, ${this.getLatLng().lng
            }`;
    }
});
































