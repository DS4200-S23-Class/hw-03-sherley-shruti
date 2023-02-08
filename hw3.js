// the pop-ups
var modal = document.getElementById('myModal');

// button
var btn = document.getElementById("myBtn");

// using for close pop-ups
var span = document.getElementsByClassName("close")[0];

//click
btn.onclick = function() {
    modal.style.display = "block";
}

// close
span.onclick = function() {
    modal.style.display = "none";
}

// close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}