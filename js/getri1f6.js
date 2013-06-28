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
    if (xy==2){sxy="<img src='images/kerma_K.gif?"+new Date().getTime()+"' alt='Κέρμα'/>";}
    else if (xy==1){sxy="<img src='images/kerma_G.gif?"+new Date().getTime()+"' alt='Κέρμα'/>";}
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
