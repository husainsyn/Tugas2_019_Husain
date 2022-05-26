function myFunction() {
    var x = document.getElementById("myBoxMenu");
    if (x.className === "box-menu") {
        x.className += "responsive";
    } 
    else {
        x.className = "box-menu";
    }
  }