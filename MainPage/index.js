function myMenuToggle() {
    var x = document.getElementById("topinbar");
    if (x.className === "topnav") { 
            x.className += " responsive"; 
            document.getElementById("ticon").innerHTML="X"; 
            var bcr1 = document.getElementById("brd1"); if(bcr1) { bcr1.innerHTML="&rdsh;"; }
            var bcr2 = document.getElementById("brd2"); if(bcr2) { bcr2.innerHTML="&rdsh;"; }
            var bcr3 = document.getElementById("brd3"); if(bcr3) { bcr3.innerHTML="&rdsh;"; } /*rdsh*/
        } 
    else { x.className = "topnav"; 
            document.getElementById("ticon").innerHTML="&equiv;"; 
            var bcr1 = document.getElementById("brd1"); if(bcr1) { bcr1.innerHTML=" &gt;&nbsp;"; }
        var bcr2 = document.getElementById("brd2"); if(bcr2) { bcr2.innerHTML=" &gt;&nbsp;"; }
        var bcr3 = document.getElementById("brd3"); if(bcr3) { bcr3.innerHTML=" &gt;&nbsp;"; }
        }
  } 