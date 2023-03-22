let slideIndex = 0;

let imgarray = ["res/maingallery/foto1.png","res/maingallery/foto2.jpg",
"res/maingallery/foto3.webp","res/maingallery/foto4.jfif",
"res/maingallery/foto5.jfif","res/maingallery/foto6.jfif",
"res/maingallery/foto7.jpg","res/maingallery/foto8.jpg",];

let img_central = document.getElementById("imgcenter");
let img_left = document.getElementById("imgleft");
let img_right = document.getElementById("imgright");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {

  slideIndex += n;

  if(slideIndex < 0){

    slideIndex = imgarray.length-1;

  }else if(slideIndex == imgarray.length){

    slideIndex = 0;
  }

  showSlides(slideIndex);
}

function showSlides(n) {

  img_central.src = imgarray[n];

  let i = n+1;
  let j = n-1;

  if(j < 0){
    j = imgarray.length -1;
  }else if(i == imgarray.length){
    i = 0;
  }
  
  img_left.src = imgarray[j];
  img_right.src = imgarray[i];
}

//EXPAND GALLERY

function opengallery(id){
  document.getElementById("galleryopenimg").src = document.getElementById(id).src
  document.getElementById("galleryopen").style.display = "flex"
}

function closegallery(){
  document.getElementById("galleryopen").style.display = "none"
}