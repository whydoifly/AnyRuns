var medium = document.querySelector('.medium'),
    large = document.querySelector('.large'),
    slider = document.querySelector('.switch input');;
    slider2 = document.querySelector('.switch2 input');;
    medium2 = document.querySelector('.medium2'),
    large2 = document.querySelector('.large2'),


    medium.onclick = function() {
      slider.checked = false;
    }
    large.onclick = function() {
      slider.checked = true;
    }
    
    medium2.onclick = function() {
      slider2.checked = false;
    }
    large2.onclick = function() {
      slider2.checked = true;
    }


// Hide/Show Second Item
function hide2() {
  document.getElementById("section-to-hide").style.display = "none";
}

function show2() {
  document.getElementById("section-to-hide").style.display = "block";
}