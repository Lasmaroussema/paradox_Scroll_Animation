let f=document.getElementsByClassName("tree-left");
window.addEventListener('scroll',function ()
{
    let value = window.scrollY;
    document.getElementById("gate-right").style.right=`${value / 80 -10 }%`;
    document.getElementById("gate-left").style.left=`${value / 80 -8 }%`;
    document.getElementById("h1").style.scale=`${-value /500 + 1}`;
    document.getElementById("h3").style.scale=`${value / 450}`;
});
   