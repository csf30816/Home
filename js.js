//Vars

function searchWeb() {
    var searchFor = document.getElementById("bar").value;
    //Now time to make the user search.
    alert("You are now searching Google for: " + searchFor + "?");
    search = window.open("https://www.google.com/webhp?authuser=1#authuser=1&q=" + searchFor);



}

function searchWebTwo() {
    var searchFo = document.getElementById("bar2").value;
    //Now time to make the user search.
    alert("You are now going to open the web page: " + "http://" + searchFo + "?");
    search = window.open("http://" + searchFo);

}
