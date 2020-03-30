//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1Ijoiai1zb24iLCJhIjoiY2s4ZHlvcHE5MHpvejNlbzIzeDAwOXo2dCJ9.uNLaEzalK1nPGTOFHvKiRg' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'j-son/ck8dyt1kw00h21immdjlnstvk', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken, attribution: mbAttr});
    
    var standardBasemap2   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:customeBasemap //basemap
    });
    
    //create the basemap control layer*/
    var baseLayers = {
        "Light Mode": standardBasemap2,
		"Dark Mode": standardBasemap,
        "Dark Terrain": customeBasemap
    };
    
    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);