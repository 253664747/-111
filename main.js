// abbreviation Header

document.querySelectorAll(".primary-Header").forEach(item=> { 
  item.innerHTML = `
 

  <!-- nav bar -->
  <header>
    <nav class="navbar">
    <div style="display: flex; flex-direction: row-reverse;">
      <a href="#" class="titleWebsite"><h1>وقوف</h1></a>
        <ul class="nav-links">
          <li><a href="../Position details/Position_details.html">موقف</a></li>
          <li style="display: flex; flex-direction: column;  align-items: center;" onmousemove="DrowDawnMove();" onmouseout="DrowDawnOut()"><a href="#" class="Maps">الخريطة</a> 
            <div class="DrowDawnMaps">
              <ul>
               <li><a href="../Map/Map.html">جامعة الأميرة نورة</a> <div class="img"><img style="width: 37px; height: 30px; margin-left: 10px;" src="../Image/الأميرة نورة.png"></div></li>
              </ul>
         </div>
          </li>
          <li><a href="#">من نحن</a></li>
          <li><a href="../Home/Tuwaiq1.html">الرئيسية</a></li>
        </ul>
    </div>
    <div class="right-Header">
      <a href="../Profile/Profile.html"><img src="../Image/Profile.png" alt=""></a>
      </div>
   
      <i class="fas fa-bars menu-icon" id="menu" onclick="MENU()"></i>
    </nav>
   </header>
   <!-- // nav bar // -->
   
   
   <!-- Nvbar Mobile -->
   
   <header class="MENU-Mobile">
    <nav class="navbar-Mobile">
      <h1><a href="#">وقوف</a></h1>
      <ul class="nav-links-Mobile">
        <li class="active"><a href="../Login and register/Login.html">تسجيل دخول</a></li>
        <li><a href="../Home/Tuwaiq1.html">الرئيسية</a></li>
        <li><a href="">من نحن</a></li>
        <li ><a href="../Map/Map.html" class="Maps">الخريطة</a> 
        </li>
        <li><a href="#">موقف</a></li>
      </ul>
   
      <i class="fa-solid fa-x" onclick="Close()" id="close"></i>
    </nav>
   </header>
      <!-- // Nvbar Mobile // -->
   

`
})


// Menue

let BurgerMenue = document.querySelector(".menu-icon");
let Menue = document.querySelector(".MENU-Mobile");
function MENU (){
  Menue.classList.add("open")
}

function Close (){
  Menue.classList.remove("open");
}


// Drow Dawn

let Maps = document.querySelector(".Maps");
let DrowDawnMaps = document.querySelector(".DrowDawnMaps");

function DrowDawnMove(){
  DrowDawnMaps.style.display = "block"
}

function DrowDawnOut(){
  DrowDawnMaps.style.display = "none"
}



// Api 

// fetch("../wuquf.json")
// .then(res=>res.json())
// .then(data=>{
//   console.log(data)
// })




