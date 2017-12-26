
let menuShow = false

function myFunction(x) {
    x.classList.toggle("change");
    if (menuShow) {
      menuShow = false;
    } else {
      menuShow = true;
    }
    menuShowing();
  }

  function menuShowing() {
    if(menuShow){
      console.log("showing menu");
      document.getElementById('menu').style.display = 'block';
      document.getElementById('page').style.display = 'none';

    }
    else{
      console.log("showing NOO menu");
      document.getElementById('menu').style.display = 'none';
      document.getElementById('page').style.display = 'block';
    }
  }