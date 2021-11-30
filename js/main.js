
 ///show
 function show(img1, img2, img3) {
  const x = document.getElementById(img1);
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "visible";
  }
  const y = document.getElementById(img2);
  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
  } else {
    y.style.visibility = "visible";
  }

  const q = document.getElementById(img3);
  if (q.style.visibility === "hidden") {
    q.style.visibility = "visible";
  } else {
    q.style.visibility = "visible";
  }
  
}

//Hide the popup
function hideP(popup) {
  const x = document.getElementById(popup);
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "hidden";
  }
}
