// Script made by Peter Meindertsma for www.triviaplaza.com in 2020
var seriesdone = ""; var questions = [];

function StartGame(qnr, score) {
	document.getElementById("content").classList.add("fadeout");
	document.getElementById('content').innerHTML = '<div id="qscreen" style="opacity: 1;"><div id="qscreenimg" style="font-size: 1.7em; line-height: normal;">Loading</div></div>';
	var waitting = 750; if (cnr == "u0") { waitting = 1500;}
	loadQuestions('https://www.triviaplaza.com/getq.php?gid='+cnr+'&amp;buster='+Math.random());
	setTimeout(function(){CheckLoaded(qnr,0);}, waitting);
}	
function CheckLoaded(qnr,t) {
	if (questions.length > 0)
	{ setTimeout(function(){ document.getElementById('content').innerHTML = ''; BuiltScreen(qnr,0); }, 50); }	
	else { 
		if (t < 5) { t = t + 1; setTimeout(function(){ CheckLoaded(qnr,t)}, 1000); }
		else { document.getElementById("content").className = "fadein"; document.getElementById("content").classList.add("margins"); document.getElementById('content').innerHTML = '<div id="qscreen"><div id="qscreenimg" style="font-size: 1.7em; line-height: normal;">Loading takes too long<br/>Please <a href=\"'+ actcaturl +'\">reload this page</a></div></div>'; }
	}
}
function BuiltScreen(qnr,score) {
	gatc(qnr); // count virtual pageview
	var AskedQ = QuestionSizer(decodeURIComponent(questions[qnr][12]));
	var AttriQ = AtribSizer(decodeURIComponent(questions[qnr][2]));
	// determine if there's an image or not //
	if (decodeURIComponent(questions[qnr][11]) == -1) { 
		if (decodeURIComponent(questions[qnr][7]) == -1) { var imgextention = "gif"; } else { var imgextention = "jpg";}
		if (decodeURIComponent(questions[qnr][10]) == -1) { var addborder = " class=\"imgborder\""; } else { var addborder = "";}
		var imgornot = '<img src=\"https://www.triviaplaza.com/' + decodeURIComponent(questions[qnr][9]) + '/' + decodeURIComponent(questions[qnr][1]) + '.' + imgextention + '\" ' + addborder + '>';
		var imgclass = 'class="imgr"';
		}
	else { 
			imgornot = AttriQ; var imgclass = ""; 
			if (decodeURIComponent(questions[qnr][2]) == "") { AskedQ = ""; imgornot = AtribSizer(decodeURIComponent(questions[qnr][12]));}
		}
	var randomnumber=Math.floor(Math.random()*4)+1; //randomize answer positions
	switch(randomnumber) {
		case 1: var posA = questions[qnr][3]; var posB = questions[qnr][4]; var posC = questions[qnr][5]; var posD = questions[qnr][6]; randy = 1; break;
		case 2: var posA = questions[qnr][6]; var posB = questions[qnr][3]; var posC = questions[qnr][4]; var posD = questions[qnr][5]; randy = 2; break;
		case 3: var posA = questions[qnr][5]; var posB = questions[qnr][6]; var posC = questions[qnr][3]; var posD = questions[qnr][4]; randy = 3; break;
		case 4: var posA = questions[qnr][4]; var posB = questions[qnr][5]; var posC = questions[qnr][6]; var posD = questions[qnr][3]; randy = 4; break;
	}
	var lcheck = 22;
	if ((decodeURIComponent(posA).length > lcheck) || (decodeURIComponent(posB).length > lcheck) || (decodeURIComponent(posC).length > lcheck) || (decodeURIComponent(posD).length > lcheck)) { asize = "anssmall";} else { asize = "ansnormal";} 
	if (score == 1) { var pword = 'point ';} else { var pword = 'points';}
	document.getElementById("content").className = "fadein"; 
	document.getElementById("content").classList.add("margins");
	document.getElementById('content').innerHTML = '\
	<div id="qscreen">\
	<div id="ques">'+qnr+'<sup>/10</sup></div>\
	<div id="poin"><div id="score">'+score+'</div><div id="spts">'+pword+'</div></div>\
	<h1>'+AskedQ+'</h1>\
	<div id="qscreenimg"'+imgclass+'>'+imgornot+'</div>\
	</div>\
	<div id="buttons" class="'+asize+'">\
	<div id="b1"><a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posA + '\',' + randy + ')\">' + decodeURIComponent(posA) + '</a></div>\
	<div id="b2"><a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posB + '\',' + randy + ')\">' + decodeURIComponent(posB) + '</a></div>\
	<div id="b3"><a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posC + '\',' + randy + ')\">' + decodeURIComponent(posC) + '</a></div>\
	<div id="b4"><a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posD + '\',' + randy + ')\">' + decodeURIComponent(posD) + '</a></div>\
	<div>';
}
function CheckAnswer(qnr,score,answer,randy) {
	var qqdone = ""; var waittime = 2500; var agiven = "";
	  switch(randy) {
		case 1: var posA = questions[qnr][3]; var posB = questions[qnr][4]; var posC = questions[qnr][5]; var posD = questions[qnr][6]; break;
		case 2: var posA = questions[qnr][6]; var posB = questions[qnr][3]; var posC = questions[qnr][4]; var posD = questions[qnr][5]; break;
		case 3: var posA = questions[qnr][5]; var posB = questions[qnr][6]; var posC = questions[qnr][3]; var posD = questions[qnr][4]; break;
		case 4: var posA = questions[qnr][4]; var posB = questions[qnr][5]; var posC = questions[qnr][6]; var posD = questions[qnr][3]; break;
		}
	var blaqb1 = document.getElementById('b1'); blaqb1.innerHTML = '<a id=\"qdone1\">' + decodeURIComponent(posA) + '</a>';
	var blaqb2 = document.getElementById('b2'); blaqb2.innerHTML = '<a id=\"qdone2\">' + decodeURIComponent(posB) + '</a>';
	var blaqb3 = document.getElementById('b3'); blaqb3.innerHTML = '<a id=\"qdone3\">' + decodeURIComponent(posC) + '</a>';
	var blaqb4 = document.getElementById('b4'); blaqb4.innerHTML = '<a id=\"qdone4\">' + decodeURIComponent(posD) + '</a>';
	if (randy == 1) { qqdone = "qdone1"; }
	if (randy == 2) { qqdone = "qdone2"; }	
	if (randy == 3) { qqdone = "qdone3"; }
	if (randy == 4) { qqdone = "qdone4"; }	
	if (decodeURIComponent(answer) == decodeURIComponent(questions[qnr][3])) 
	{ 	score = score + 1; agiven = "0";
		setTimeout(function(){UpdateScore(score);},250);
		document.getElementById(qqdone).className += " qcorrect";
		FeedBackIcon(1);
	}
	else
	{ 	//check which wrong answer has been clicked
		if (decodeURIComponent(answer) == decodeURIComponent(posA)) { qidone = "qdone1"; if (randy == 2) { agiven = 3;} if (randy == 3) { agiven = 2;} if (randy == 4) { agiven = 1;}}
		if (decodeURIComponent(answer) == decodeURIComponent(posB)) { qidone = "qdone2"; if (randy == 1) { agiven = 1;} if (randy == 3) { agiven = 3;} if (randy == 4) { agiven = 2;}}		
		if (decodeURIComponent(answer) == decodeURIComponent(posC)) { qidone = "qdone3"; if (randy == 1) { agiven = 2;} if (randy == 2) { agiven = 1;} if (randy == 4) { agiven = 3;}}
		if (decodeURIComponent(answer) == decodeURIComponent(posD)) { qidone = "qdone4"; if (randy == 1) { agiven = 3;} if (randy == 2) { agiven = 2;} if (randy == 3) { agiven = 1;}}
		document.getElementById(qidone).className += " qincorrect";
		document.getElementById(qqdone).className += " qcorrect flashbutton";
		FeedBackIcon(0);
	}
	var qid = decodeURIComponent(questions[qnr][1]);
	var qnr = qnr + 1;
	//add qid + agiven to string of questions & answers done 
	if (qnr == 2) {seriesdone = cnr + '-379_';}
	seriesdone = seriesdone + qid + '-' + agiven + '_';
	if (qnr > 10) { setTimeout(function(){document.getElementById("qscreenimg").className = "fadeout";},waittime); setTimeout(function(){ShowEndResults(avgscore,score);},waittime);}
	else { 
		 setTimeout(function(){document.getElementById("qscreenimg").className = "fadeout";},waittime); 
		 setTimeout(function(){BuiltScreen(qnr,score);},waittime);
		}
	//setTimeout(function(){document.getElementById("content").classList.add("fadeout");},5);	
	//if (qnr == 11) { setTimeout(function(){DocScore(seriesdone);},Window.waittime+50);} // qnr == 11
	if (qnr == 11) { setTimeout(function(){DocScore(seriesdone);},50);} // qnr == 11
}
function UpdateScore(score) {
	if (score == 10) { document.getElementById("score").className = "score10";}
	if (score == 1) { var pword = 'point ';} else { var pword = 'points';}
	document.getElementById('spts').innerHTML = pword;
	var qqscore = document.getElementById('score'); qqscore.innerHTML = score;
	return qqscore;
}
function FeedBackIcon(c) {
	var div = document.createElement('div'); var bla = document.getElementById('qscreen'); bla.appendChild(div); div.id = 'fbicon'; 
	fbicon.style.opacity="0";
	if (c == 1) { var checkmark = '&check;'; var colorclass = 'acorrect';}
	else { var checkmark = '&#x2718;'; var colorclass = 'aincorrect';}
	div.innerHTML = '<a class=\"'+colorclass+'\">'+checkmark+'</a>';
	var bla2 = document.getElementById('qscreenimg');
	bla2.style.opacity="0.7"; 
	setTimeout(function(){document.getElementById('fbicon').className += " fadeoutfb";},0);
	//setTimeout(function(){div.parentNode.removeChild(div); bla2.style.opacity="1";},Window.waittime+500);
}	
function ShowEndResults(avg, score) {
	switch(score) { 	
		case 10: var fgrade = "A"; var rcolor = "#6BD425"; rcomment = "Excellent!"; break;
		case 9: var fgrade = "A-"; var rcolor = "#7BBA25"; rcomment = "Very good!"; break;
		case 8: var fgrade = "B"; var rcolor = "#8BA126"; rcomment = "Good"; break;
		case 7: var fgrade = "C"; var rcolor = "#9B8727"; rcomment = "Fine"; break;
		case 6: var fgrade = "D"; var rcolor = "#AB6E27"; rcomment = "Marginal"; break;
		case 5: var fgrade = "F+"; var rcolor = "#BB5428"; rcomment = "Bad"; break;
		case 4: var fgrade = "F"; var rcolor = "#CB3B29"; rcomment = "Pretty bad"; break;
		case 3: var fgrade = "F"; var rcolor = "#CB3B29"; rcomment = "Pretty bad"; break;
		case 2: var fgrade = "F-"; var rcolor = "#DB222A"; rcomment = "Very bad"; break;
		case 1: var fgrade = "F-"; var rcolor = "#DB222A"; rcomment = "Very bad"; break;
		case 0: var fgrade = "F-"; var rcolor = "#DB222A"; rcomment = "VERY bad!"; break;
		default: var fgrade = ""; var rcolor = "#000000"; rcomment = ""; break;
	}
	gscore = score;
	var resulttitle = actcat+'  quiz results:';
	var avgb = avg*10; if (isNaN(avgb)) { avgb = 0;}
	var gscoreb = gscore*10;
	document.getElementById('qscreen').innerHTML = '\
	<h1 class="resulth1">'+AtribSizer(resulttitle)+'</h1>\
	<div id="grade">\
	<div id="mark" style="color:'+rcolor+'" class="delay1">'+fgrade+'</div>\
	<div id="comment" style="color:'+rcolor+'" class="delay2">'+rcomment+'</div>\
	<div id="stable" class="delay3"><table><tr><td class="tl">Your score:</td><td class="tr sbig" style="color:'+rcolor+'">'+score+'</td></tr><tr><td class="tl">Average score:</td><td class="tr savg">'+avg+'</td></tr><tr><td class="tl">Total plays:</td><td class="tr savg">'+plays+'</td></tr></table></div>\
	</div>\
	<div id="graphcontainer">\
	<div id="graph">\
	<div id="grid">\
	<div id="graphscales">\
	<div id="g10">10<span>-</span></div><div id="g9">9<span>-</span></div><div id="g8">8<span>-</span></div><div id="g7">7<span>-</span></div><div id="g6">6<span>-</span></div><div id="g5">5<span>-</span></div><div id="g4">4<span>-</span></div><div id="g3">3<span>-</span></div><div id="g2">2<span>-</span></div><div id="g1">1<span>-</span></div><div id="g0">0<span style="opacity: 0;">-</span></div>\
	<div id="labelavg" class="label">Average<br/>score</div>\
	<div id="labelyour" class="label">Your</br/>score</div>\
	<div id="baravg" class="bar ba" style="max-height: calc('+Math.round(avgb)+'% - 2px);"></div>\
	<div id="baryour" class="bar b'+score+'" style="max-height: calc('+gscoreb+'% - 2px);"></div>\
	</div>\
	</div>\
	</div>\
	<div>';
	document.getElementById("qscreen").className = "qscreenresult";
	document.getElementById("buttons").className = "ansnormal";	
	document.getElementById('buttons').innerHTML = '\
	<div id="b1"><a href=\"#\" onclick=\"StartGame(1,0); if(typeof gtag == \'function\') { gtag(\'event\', \'Play again Button\', { \'event_category\' : \'' + topcat + '\', \'event_label\' : \'' + actcat + '\' , \'value\' : ' + score + '}); }\" class=\"ansnormal\">Play Again</a></div>\
	<div id="b2"><a href=\"' + tabcaturl + '\" class=\"ansnormal\">Done</a></div>';
	window.questions = [];
	gatc(11); gaev(score);
}	
function DocScore(done) {
	var xhr;
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // all browsers
	else xhr = new ActiveXObject("Microsoft.XMLHTTP");     // for IE
	var url = 'https://www.triviaplaza.com/writeqs.php?qnrs='+btoa(done);
	//document.write(url);
	//alert(url);
	xhr.open('POST', url, true);
	//xhr.onreadystatechange = function () { if (xhr.readyState===4 && xhr.status===200) { alert(xhr.responseText); } }
	xhr.send();
	return false;
}	
function loadQuestions(url) {
var xmlhttp;
var x,xx,i;
if (window.XMLHttpRequest) { xmlhttp=new XMLHttpRequest(); }	// code for IE7+, Firefox, Chrome, Opera, Safari
else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); } 		// code for IE6, IE5
xmlhttp.onreadystatechange=function()
{ if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{ 	x=xmlhttp.responseXML.documentElement.getElementsByTagName("Q");
		//var questions = [];
		//init 2d array
		for (var teller = 1; teller < 11; teller++) { questions[teller] = []; }
		for (i=0;i<x.length;i++) 
		{ for (j=1;j<13;j++) 
			{	tagname = 'A' + j; //alert(tagname);
				xx=x[i].getElementsByTagName(tagname);
				if (xx[0].firstChild.nodeValue == " ") { xx[0].firstChild.nodeValue = "";} 
				questions[i+1][j] = xx[0].firstChild.nodeValue; 
			}
		}
	}
}
xmlhttp.open("POST",url,true);
xmlhttp.send();
return questions;
}
function QuestionSizer(word) {
	var leng = word.length;
	if 		(leng < 60) { classy = "Size1"}
	else if (leng < 80) { classy = "Size2"}
	else if (leng < 100) { classy = "Size3"}
	else if (leng < 120) { classy = "Size4"}
	else if (leng < 140) { classy = "Size5"}
	else if (leng < 160) { classy = "Size6"}	
	else if (leng < 180) { classy = "Size7"}	
	else if (leng < 200) { classy = "Size8"}	
	else { classy = "Size9"}	
	var wordy = '<span class=\"'+classy+'\">'+word+'</span>';
	return wordy;
}	
function AtribSizer(word) {
	var leng = word.length;
	if 		(leng < 20) { classy = "Size0"}
	else if (leng < 50) { classy = "Size1"}
	else if (leng < 80) { classy = "Size2"}
	else if (leng < 80) { classy = "Size3"}
	else if (leng < 110) { classy = "Size4"}
	else if (leng < 140) { classy = "Size5"}
	else if (leng < 170) { classy = "Size6"}	
	else if (leng < 200) { classy = "Size7"}			
	else if (leng < 230) { classy = "Size8"}			
	else { classy = "Size9"}	
	var wordy = '<span class=\"'+classy+'\">'+word+'</span>';
	return wordy;
}	
//GATC tracking for virtual JS pageviews
function gatc(nr) {
	var gaquest = 'quiz/question' + nr;	
	// if(typeof ga == 'function')
 	// { ga('send', 'pageview', gaquest); }
	if(typeof gtag == 'function')
	{ gtag('config', 'UA-292912-5', {'page_path': gaquest}); } 
}
//GATC tracking for events
function gaev(score) {
	//if(typeof ga == 'function')
 	//{ ga('send', 'event', 'Scores', topcat, actcat, score); }
 	if(typeof gtag == 'function')
 	{ gtag('event', 'Scores', { 'event_category' : topcat, 'event_label' : actcat, 'value' : score}); }
}
