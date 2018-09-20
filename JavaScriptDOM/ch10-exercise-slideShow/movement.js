function moveElement(elementID,finalx,finaly,interval){
  if(!document.getElementById) return false;
  if(!document.getElementById(elementID)) return false;

  var elem = document.getElementById(elementID);
  if(elem.movement){
    clearTimeout(elem.movement);
  }
  if(!elem.style.left){
    elem.style.left="0px";
  };
  if(!elem.style.top){
    elem.style.top="0px";
  };
  var xpos=parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);

  if(xpos===finalx&&ypos===finaly){
    return true;
  }
  if(xpos<finalx){
    dist = Math.ceil((finalx-xpos)/10);
    xpos+=dist;
  }
  if(xpos>finalx){
    dist=Math.ceil((xpos-finalx)/10)
    xpos-=dist;
  }
  if(ypos<finaly){
    dist=Math.ceil((finaly-ypos)/10);
    ypos+=dist;
  }
  if(ypos>finaly){
    dist=Math.ceil((ypos-finaly)/10);
    ypos-=dist;
  }
  elem.style.left=xpos+'px';
  elem.style.top = ypos+'px';

  var repeat = "moveElement('"+elementID+"',"+finalx+","+finaly+","+interval+")";
  elem.movement= setTimeout(repeat,interval);

};
