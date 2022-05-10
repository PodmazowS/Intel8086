var hex = /^[A-F]+$/;
var b1 = [ "pax", "pbx", "pcx", "pdx"]; 
var b2 = [ "pax2", "pbx2", "pcx2", "pdx2"];
var rejestry = ["ax", "bx", "cx", "dx"]; 
var rejestry2 = ["si", "di", "bp", "bx"];
var stack = [0, 0, 0 ,0];

var r1, r2, rej1="", rej2="";


function checkhex(){
    rax = document.getElementById("ax").value;
    if(rax.value.match(hex))
      return true;
    else
    {
        alert("Wartości adresu muszą być w systemie hexadecymalnym");
    }
}


function mov(){

    for(var i=0; i<4; i++)
    {
        if(document.getElementById(b1[i]).checked == true)
            {
                rej1 = rejestry[i];
                break;
            }
    }
  for(var i=0; i<4; i++)
    {
        if(document.getElementById(b2[i]).checked == true)
        {
            rej2 = rejestry[i];
            break;
        }
    }

    document.getElementById(rej2).value = document.getElementById(rej1).value;
}

function xchg(){
    for(var i=0; i<4; i++)
    {
        if(document.getElementById(b1[i]).checked == true)
            {
                rej1 = rejestry[i];
                r1 = document.getElementById(rej1).value;
                break;
            }
    }
  for(var i=0; i<4; i++)
    {
        if(document.getElementById(b2[i]).checked == true)
        {
            rej2 = rejestry[i];
            r2 = document.getElementById(rej2).value;
            break;
        }
    }

    document.getElementById(rej2).value = r1;
    document.getElementById(rej1).value = r2;
}



function zer(){

    for(var x=0; x<4; x++)
    {
     document.getElementById(rejestry[x]).value = '0000';
    }
 
    for(var x=0; x<4; x++)
    {
     document.getElementById(rejestry2[x]).value = '0000';
    }

}



