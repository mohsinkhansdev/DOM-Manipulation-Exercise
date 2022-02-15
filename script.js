// DOM Style
var h1 = document.querySelector("h1");

h1.style

h1.style.color = "blue";
'blue'

h1.style.border = "5px solid red";
'5px solid red'

// DOM Text and Context
var p = document.querySelector("p");
p.classList.add("big");
p.classList.remove("big");

p.classList.toggle("big");
true

p.classList.toggle("big");
false

var p = document.getElementsByTagName("p");
p.textcontent
p
p.textContent

var p = document.getElementsByTagName("p");

p.textContent

var p = document.getElementsByTagName("p")[0];

p.textContent
'simple Paragraph with five Words'
var ul = document.getElementsByTagName("ul") [0]

ul.textContent
'\n        HTML\n        CSS\n        JavaScript\n    '
var ul = document.querySelector("ul");

ul
ul.textContent
'\n        HTML\n        CSS\n        JavaScript\n    '

var p = document.getElementsByTagName("p");

p.textContent

var p = document.getElementsByTagName("p")[0];

p.textContent
'simple  Paragraph  with five Words'
p.innerHTML
'simple <strong> Paragraph </strong> with five Words'
var ul = document.getElementsByTagName("ul");

var ul = document.querySelector("ul")[0];

ul.textContent
var ul = document.getElementsByTagName("ul");

var ul = document.querySelector("ul")

ul.textContent
'\n        HTML\n        CSS\n        JavaScript\n    '
ul.innerHTML
'\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>JavaScript</li>\n '

// DOM Attributes
var img1 = document.getElementsByTagName("img")[0]

img1

img1.getAttribute("src");
'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
img1.setAttribute("src",https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg);
img1.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
img1.setAttribute("src","https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=");

var img2 = document.getElementsByTagName("img")[1]

img2

img1.getAttribute("src");
'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
img1.setAttribute("src",https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg);
img1.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
img1.setAttribute("src","https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=");

var a = document.querySelector("a");
undefined
a.setAttribute("href", "www.mmk.com");
undefined
a
<a href=​"http://www.mmk.com">​I am a google​</a>​
a.textContent = "New Link";
'New Link'