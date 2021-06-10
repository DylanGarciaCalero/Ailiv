let $hamburger = document.getElementById("button--hamburger");
console.log($hamburger);

let $winkelmandje = document.getElementById("toggle--winkelmandje");
console.log($winkelmandje);

let $closewinkel = document.getElementById("close--winkel");
console.log($closewinkel)

$hamburger.addEventListener('click', displayNav);
$winkelmandje.addEventListener('click', displayWinkelmandje);
$closewinkel.addEventListener('click',closeWinkel);


function displayNav() {

    console.log("hallo");

    let $hamburgerstyle = document.getElementById("toggle--nav");

    console.log($hamburgerstyle.style);

    if ($hamburgerstyle.style.display == "block") {
        $hamburgerstyle.style.display = "none";

    } else {

        $hamburgerstyle.style.display = "block";
    }

};

function displayWinkelmandje() {

    console.log("hallo2");

    let $winkelstyle = document.getElementById("toggle--winkel");

    $winkelstyle.style.display = "block"
};

function closeWinkel() {

    console.log("hallo3");

    let $winkelstyle = document.getElementById("toggle--winkel");

    $winkelstyle.style.display = "none"
}