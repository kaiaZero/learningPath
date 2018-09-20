function prepareGallery(){
  if(!document.getElementById) return false;
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById("imageGallery")) return false;
  var gallery = document.getElementById("imageGallery");
  var links = gallery.getElementsByTagName("a");
  for(var i=0;i<links.length;i++){
    links[i].onclick = function (){
      return !showPic(this);
    }
  }
}
function showPic(whichpic){
  if(!document.getElementById("placeholder")) return false;

  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if(document.getElementById("description")){
    if(whichpic.getAttribute("title")){
      var text = whichpic.getAttribute("title");
    }else{
      var text = "";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType==3){
    description.firstChild.nodeValue =text;

    }
  }
  return true;
};
function preparePlaceHolder(){
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;
  var placeholder =document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","blank.jpg");
  placeholder.setAttribute("alt","my image gallery");
  var description = document.createElement("p");
  var txt = document.createTextNode("Choose a picture");
  description.setAttribute("id","description");
  description.appendChild(txt);
  document.getElementsByTagName("body")[0].appendChild(placeholder);
  document.getElementsByTagName("body")[0].appendChild(description);

}

window.onload = function(){

  prepareGallery();
    preparePlaceHolder();
}
