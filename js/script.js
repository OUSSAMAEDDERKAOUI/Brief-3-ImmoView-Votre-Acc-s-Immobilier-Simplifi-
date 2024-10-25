/* auto show images */
var i = 0;
var images = [];
var time = 3000;

images[0] = '/assets/img detait/Image (1).png';
images[1] = '/assets/img detait/Image (2).png';
images[2] = '/assets/img detait/Image (3).png';
images[3] = '/assets/img detait/Image (1).png';
images[4] = '/assets/img detait/Underground.png';
images[5] = '/assets/img detait/Image.png';
images[6] = '/assets/img detait/Driving lights.png';
images[7] + '/assets/img detait/Group 11.png';

function changeImg() {
    document.getElementById('main-image').src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImg, time);
}

window.onload = changeImg;
/** end of auto show images */
/*********************************************************************************************************** */

/**BURGER MUNE */
function burgerfonc() {
    var w = window.innerWidth;
    const but1 = document.getElementsByClassName("navlist2")[0];
         if (but1.style.display === "grid") {
             but1.style.display = "none";
         }else{
             but1.style.display = "grid";
         }
   
}

 
window.addEventListener('resize', function(){
    var w = window.innerWidth;
    const but1 = document.getElementsByClassName("navlist2")[0];
    if (w > 768){
       but1.style.display = "none"
    }
})

/** end of burger mune */
/********************************************************************************************/