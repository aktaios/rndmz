function getRandomIntd6 () {
    xy = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.write(xy.toString());
}
function getRandomMAR () {
    xy = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (xy==2){sxy="<img src='images/MA0.gif?"+new Date().getTime()+"' alt='Μαργαρήτα'/>";}
    else if (xy==1){sxy="<img src='images/MA1.gif?"+new Date().getTime()+"' alt='Μαργαρήτα'/>";}
    document.write(sxy);
}
function getRandomKER () {
    xy = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (xy==2){sxy="<img src='images/kermK.gif?"+new Date().getTime()+"' alt='Κέρμα'/>";}
    else if (xy==1){sxy="<img src='images/kermG.gif?"+new Date().getTime()+"' alt='Κέρμα'/>";}
    document.write(sxy);
}

function getRandomMZ () {
    xy = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (xy==2){sxy="Ζυγά.";}
    else if (xy==1){sxy="Μονά.";}
    document.write(sxy);
}

function getRandomS3 () {
    xy = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    if (xy==4){sxy='Με σειρά';}
    else if (xy==3){sxy='Χωρίς σειρά';}
    else if (xy==2){sxy='2 Ψηφία';}
    else if (xy==1){sxy='1 Ψηφίο';}
    document.write(sxy);
}
/**
 * Returns a random number between min and max
 */
function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (minn, maxn) {
    xy = Math.floor(Math.random() * (maxn - minn + 1)) + minn;
    document.write(xy.toString());
}

function getRandomInts (minn, maxn, plith) {
    //plith.parseInt;
    var mlist=[];
    var tes=0;
    while (mlist.length<plith){
      var tes=false;
      xy = Math.floor(Math.random() * (maxn - minn + 1)) + minn;
      for (var l=0; l<mlist.length; l++){
          if (xy==mlist[l]){
             tes=true;break;
          }
      }
      if (!tes){mlist.push(xy);}
    }
    if (!(minn==0 && maxn==9)){
    mlist.sort(function(a,b){return a - b;});
    }
    for (var si=3; si<mlist.length;si+=4){
      var kk=mlist.splice(si,1);
      mlist.splice(si,0,kk.toString()+"<wbr>");
    }
    document.write(mlist.toString());
}

function setKO(timeim,timeis) {
//debug
//  console.log(sessionStorage.usedZM);
    console.log(sessionStorage.kickoffZM);
    console.log(timeim+timeis);
    if ((timeis>5 || timeim>0) && sessionStorage.usedZM!="TR"){
      var now = new Date();
      now = now.getTime();
      now = (now + ((timeim*60*1000)+(timeis*1000)));
      sessionStorage.usedZM="TR";
      sessionStorage.kickoffZM=now;
      runForest = setInterval('updateWCTime()', 1000 );
    }
    
    return false;
}

/**
 *COUNTDOWN func
 * 
 */
function updateWCTime() {
    //DEBUG
    //console.log(sessionStorage.usedZM);
    console.log(sessionStorage.kickoffZM);
    
    now      = new Date();
    now = now.getTime();
    kickoff  = sessionStorage.kickoffZM;
    diff = kickoff - now;
    if (isNaN(diff)){sessionStorage.usedZM="NNoo";}
    if (diff<1){sessionStorage.usedZM="NNoo";clearInterval(runForest);}
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
    mm = mins;//  - hours * 60;
    ss = secs  - mins  * 60;
    if (sessionStorage.usedZM=="TR"){
	outSt = 'Ο χρώνος κυλά: '+mm + ' λεπτά ' +
                ss + ' δευτερόλεπτα ακόμα.!';   
    }else{
	outSt = 'Πατήστε "Ξεκήνα! για αντίστροφη μέτρηση."'
    }
    document.getElementById("klepsidra").innerHTML = outSt;
                
}
    

