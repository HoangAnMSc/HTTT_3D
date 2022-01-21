var fg = L.featureGroup();

function CheckDuongtinh(){
// Test ca dương tính 
    var array_duongtinh= [[10.869948, 106.796439],[10.874842, 106.798475]];
  
    if ($('#toggle').is(":checked")) {
        for (let index = 0; index < array_duongtinh.length; index++) {
            const element = array_duongtinh[index];
            var Duongtinh = element; // Toạ độ marker
            var option = {
                className: "map-popup-content",
            };
        // html cho popup
            var content = `<div class='left'>
                                    <img src='https://upload.wikimedia.org/wikipedia/vi/2/28/Bloom.png' />
                                </div>
                                <div class='right'>
                                    <b>Ca thứ xx</b><br>Dương tính `+index+`
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
            var marker = L.marker(Duongtinh,{
                icon: Icon}
            );
            marker.bindPopup(popup);
            marker.addTo(fg);
            var layer = L.layerGroup().addLayer(fg);
          
            // binding popup vào marker
            
            
        }
    
    } else {
        map.removeLayer(layer)
        
    }
}