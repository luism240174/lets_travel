let platform = new H.service.Platform({
    'apikey': 'vpkbKJ6FA4PEa3mR_3W6iLMNfu3AHytyRx9nfzAdutU'
  });
  //vpkbKJ6FA4PEa3mR_3W6iLMNfu3AHytyRx9nfzAdutU

/*
let defaultLayers = platform.createDefaultLayers();

let map = new H.Map(
    document.querySelector('.map'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: 48.85843360794257, lng: 2.2944598399441167  }, 
    });

let ui = H.ui.UI.createDefault(map, defaultLayers);
*/



function landmarkGeocode() {
    let title = document.querySelector('h1').textContent;
    let geocoder = platform.getSearchService(),
    landmarkGeocodingParameters = {
        q: title,
        at: '0,0',
        limit : 1
    };
    
    geocoder.discover(
        landmarkGeocodingParameters,
        showMap,
        (e) => console.log(e)
    );
}


function showMap (result) {
    
    let location = result.items;
    console.log(location);
    // Obtain the default map types from the platform object:
    let defaultLayers = platform.createDefaultLayers();  
    // Instantiate (and display) a map object:
    let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: location[0].position.lat, lng: location[0].position.lng }
        });
    //See marker on the map section    
    let marker = new H.map.Marker({lat: location[0].position.lat, lng: location[0].position.lng});
    map.addObject(marker);
    
    let ui = H.ui.UI.createDefault(map, defaultLayers);
}

landmarkGeocode();
