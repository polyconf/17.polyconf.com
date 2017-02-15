console.log("%cPolyConf 17!!!", "font-size:42px; background-color: #222; color: #EEE");

!function(){"use strict";if("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach){var a=function(a,b){var g,c=window.pageYOffset,d=a.offsetTop,e=d-c,f=e/(b/16),h=function(){window.scrollBy(0,f),g()};g=f>=0?function(){var a=window.pageYOffset;(a>=d-f||window.innerHeight+a>=document.body.offsetHeight)&&clearInterval(i)}:function(){var a=window.pageYOffset;a<=(d||0)&&clearInterval(i)};var i=setInterval(h,16)},b=document.querySelectorAll(".scroll");[].forEach.call(b,function(b){b.addEventListener("click",function(c){c.preventDefault();var d=b.getAttribute("href"),e=document.querySelector(d),f=b.getAttribute("data-speed");e&&a(e,f||400)},!1)})}}();

particlesJS("particles-js", {
  "particles": {
    "number":{
      "value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#26b2e6"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
  "retina_detect":true
});


var target = document.querySelector('.navbar-toggler');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close-menu');
var link = document.querySelector('.nav-link');
var navi = document.querySelector('.navbar');
target.addEventListener('click', toggleClass, false);
close.addEventListener('click', removeClass, false);
link.addEventListener('click', removeClass, false);

function toggleClass() {
  overlay.classList.toggle('open');
}

function removeClass() {
  overlay.classList.remove('open');
}

window.onscroll = function() {
  fixedNav()
};

function fixedNav() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navi.classList.add('fixed')
  } else {
    navi.classList.remove('fixed');
  }
}