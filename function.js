function change_paragraph_elements() {
    var border_Red = document.getElementById("border_Red").value;
    var border_Green = document.getElementById("border_Green").value;
    var border_Blue = document.getElementById("border_Blue").value;
    var border_width = document.getElementById("border_width").value;
    var background_Red = document.getElementById("background_Red").value;
    var background_Green = document.getElementById("background_Green").value;
    var background_Blue = document.getElementById("background_Blue").value;

    var tag = document.getElementById("para");
    tag.style.borderColor = `rgb(${border_Red},${border_Green},${border_Blue})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${background_Red},${background_Green},${background_Blue})`;
}
function validate() {
  var p1 = document.getElementById("password1").value;
  var p2 = document.getElementById("password2").value;

  if(p1.length <8 || p2.length<8){
    alert("The length of one of the passwords is less than 8 letters!")
  }
  else if(p1!=p2){
    alert("The passwords do not match!")
  }
  else{
    alert("Everything checks out!")
  }
}
