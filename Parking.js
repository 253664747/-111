const TitlePark = document.querySelector(".title-park")



function GetUrl() {
  const urlprams = new URLSearchParams(window.location.search);
  const NamePark = urlprams.get("NamePark");
  return NamePark;
}

TitlePark.innerHTML = `
 ${GetUrl()}
`

