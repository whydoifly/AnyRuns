// Transport selection
let bookBtns = document.getElementsByClassName("btn");
let bookNow = document.getElementById("book-btn-widget");
let bicycleBtn = document.getElementById("bicycle");
let carBtn = document.getElementById("car");
let vanBtn = document.getElementById("van");

let vanOption = document.getElementsByClassName("van-quote-option");
let quoteVl = document.getElementById("option-vl");

let itemBtn = document.getElementsByClassName("item-btn");



let item1Btn = document.getElementById("item-1-button");
    item2Btn = document.getElementById("item-2-button");



// Transport selection buttons trakcer
for (var i = 0; i < bookBtns.length; i++) {
  bookBtns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("icon-active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" icon-active", "");
  }
  this.className += " icon-active";
  });
}

// Van option selection

for (var x = 0; x < vanOption.length; x++) {
  vanOption[x].addEventListener("click", function() {
  var currentOption = document.getElementsByClassName("option-active");
  if (currentOption.length > 0) { 
    currentOption[0].className = currentOption[0].className.replace(" option-active", "");
  }  
  this.className += " option-active";
  });
}

// Number of items select
for (var z = 0; z < itemBtn.length; z++) {
  itemBtn[z].addEventListener("click", function() {
    var currentItem = document.getElementsByClassName("item-active-btn");
    if (currentItem.length > 0) {
      currentItem[0].className = currentItem[0].className.replace(" item-active-btn", "");
    }
    this.className += " item-active-btn";
  })
}


bookNow.onclick = function() {
  if (carBtn.classList.contains("icon-active")) {
    location.href = "./car-quote.html";
  } else if (vanBtn.classList.contains("icon-active")) {
    location.href = "./van-quote.html";
  } else {
    location.href = "./bicycle-quote.html";
  }
}; 

