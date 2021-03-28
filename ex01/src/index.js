var ij = "";
var varCapsLock = "0";
var varShift = "0";
function funcDel() {
  var inputD = document.getElementById("backsp").innerHTML;
  var i = document.getElementById("backsp").innerHTML.length;
  var j = 1;
  var k = i - j;
  document.getElementById("backsp").innerHTML = inputD.slice(0, k);
}
function functionCaps() {
  if (varCapsLock == "0") {
    varCapsLoc = "1";
  } else if (varCapsLock == "1") {
    varCapsLock = "0";
  }
}
function functionShf() {
  if (varShif == "0") {
    varShif = "1";
  } else if (varShif == "1") {
    varShif = "0";
  }
}
function functionEnt() {
  var inputD = document.getElementById("ent").innerHTML;
  document.getElementById("ent").innerHTML = inputD + "\n";
}
function functionOK() {
  var inputD = document.getElementById("ok").innerHTML;
  if (inputD == "") {
    alert("Niste unijeli tekst!");
  } else {
    alert(inputD);
  }
}
function functionSpc() {
  var inputD = document.getElementById("space").innerHTML;
  document.getElementById("space").innerHTML = inputD + " ";
}


//Brojevi
function function1() {
  var inputD = document.getElementById("1").innerHTML;
  document.getElementById("1").innerHTML = inputD + "1";
}

function functionQ() {
  var inputD = document.getElementById("q").innerHTML;
  if (varCapsLoc == "0") {
    if (varShif == "0") {
      document.getElementById("q").innerHTML = inputD + "q";
    } else if (varShif == "1") {
      varShif = "0";
      document.getElementById("q").innerHTML = inputD + "Q";
    }
  } else if (varCapsLoc == "1") {
    if (varShif == "0") {
      document.getElementById("q").innerHTML = inputD + "Q";
    } else if (varShif == "1") {
      varShif = "0";
      document.getElementById("q").innerHTML = inputD + "q";
    }
  }
}






