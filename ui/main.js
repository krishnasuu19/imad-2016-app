console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "Changed";

///to make move

var marginLeft = 0;
var img = document.getElementById('madi');
img.onclick = function() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
};

