function myFunction() {
    var x = document.getElementById("myBoxMenu");
    if (x.className === "box-menu") {
        x.className += "responsive";
    } 
    else {
        x.className = "box-menu";
    }
  }

  function submit_data(){
      var y = document.getElementById("avai").value;
      var x = document.getElementById("table2").rows[0].cells;
      x[0].innerHTML = y;
  }