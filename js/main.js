
 ///show
 function show(img1) {
   const x = document.getElementById(img1);
   x.style.visibility === "hidden" ? x.style.visibility = "visible" : x.style.visibility = "visible"
   
}

//Hide the popup
function hideP(popup) {
  const x = document.getElementById(popup);
  x.style.visibility === "visible" ?  x.style.visibility = "hidden" : x.style.visibility ="hidden"
}
