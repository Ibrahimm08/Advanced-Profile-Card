function Flip(){
    var card = document.getElementById("card");
    card.classList.toggle("flip");

    var backcontent = getElementById("back-content");
    backcontent.classList.toggle("flip");
}

function OpenMenu(){
    var Btn = document.getElementById("toggle");
    Btn.classList.toggle("btnActive");

    var backcontent = document.getElementById("back-content");
    backcontent.classList.toggle("is-open");
}

function About(){
    var aboutcontent = document.getElementById("about");
    var header = document.getElementById("header");

    if(aboutcontent.classList.contains("hidden")){
        aboutcontent.classList.remove("hidden");
        header.classList.remove("hidden")
    }else{
        aboutcontent.classList.add("hidden");
        header.classList.add("hidden");
    }
}

function Portfolio(){
    console.log("Portfolio button clicked");
    var aboutcontent = document.getElementById("about");
    var header = document.getElementById("header");

    if(aboutcontent.classList.contains("hidden")){
        aboutcontent.classList.remove("hidden");
        header.classList.remove("hidden")
    }else{
        aboutcontent.classList.add("hidden");
        header.classList.add("hidden");
    }
}