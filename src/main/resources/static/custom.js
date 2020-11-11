function initMap() {

    let busImage = {
        url: "/busImage.png", 
        scaledSize: new google.maps.Size(50, 50)
    };
    
    let personImage = {
        url: "/personImage.png", 
        scaledSize: new google.maps.Size(50, 50)
    };

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { 
            lat: parseFloat(busLocations[0].LATITUDE),
            lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });
    
    for (let i=0; i<busLocations.length; i++){
        
        let contentString = "<h2>" + "This bus is on route " + busLocations[i].ROUTE + " and is headed " + busLocations[i].DIRECTION + ".";
        
        let marker = new google.maps.Marker({
            position: {
            lat: parseFloat(busLocations[i].LATITUDE),
            lng: parseFloat(busLocations[i].LONGITUDE) 
            },
            map: map,
            icon: busImage,
            animation: google.maps.Animation.DROP
        });

        let infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            });
    };

    let personMarker = new google.maps.Marker({
        position: {
        lat: parseFloat(personLocation.lat),
        lng: parseFloat(personLocation.lng)
        },
        map: map,
        icon: personImage,
        animation: google.maps.Animation.DROP
    });

}   
