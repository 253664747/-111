let map;

async function initMap() {
  const center = { lat : 24.85653136189153, lng : 46.72408194516214 }
  const zoom = 14
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("Maps"), {
    center,
    zoom,
    disableDefaultUI: true,
    mapTypeId: "satellite"
  });
  
}

window.initMap = initMap;

function ClickedPost(NamePark){
  location = `../Parking/Parking.html?NamePark=${NamePark}`
  console.log(NamePark);
}