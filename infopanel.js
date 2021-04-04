wasdate = new Date();

respText="";
artz="Rihanna";
songz="Umbrella";

function getSong(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  if((artz!="")&&(songz!="")){
  oReq.open("GET", "https://api.lyrics.ovh/v1/"+artz+"/"+songz);
  oReq.send();
  document.getElementById('outz').innerHTML = "Sent!";
  }
}


function reqListener () {
  respText = this.responseText;
  outHTML = respText.replace(/\\r/gi,"").replace(/\\n/gi,"\\pqz \\pqz ").replace(/\\pqz\ \\pqz\ \\pqz\ /gi,"\\pqz \\pqz ").replace(/\\pqz\ \\pqz\ \\pqz\ /gi,"\\pqz \\pqz ").replace(/\\pqz\ /gi,"\n");
  outHTML = outHTML.substring(11,outHTML.length-2);
  document.getElementById('outText').innerHTML = outHTML;
  document.getElementById('outz').innerHTML = "Your lyrics!";
}

window.onload=function(){
  document.body.style="font-size: 14pt; color: red;";
  document.body.innerHTML="<p id=\"timerz\"></p>Artist: <input type=\"text\" value=\"Rihanna\" onchange=\"artz=this.value\"><br> Song: <input type=\"text\" value=\"Umbrella\" onchange=\"songz=this.value\"><br><span onclick=\"getSong();\">Click for Lyrics</span><p id=\"outz\">Welcome! </p><pre id=\"outText\"></pre>";
  setInterval(function(){
    nowdate=new Date();
    document.getElementById('timerz').innerHTML="You've been here for "+Math.floor((nowdate.getTime() - wasdate.getTime())/1000)+" seconds!";
  },300);
}