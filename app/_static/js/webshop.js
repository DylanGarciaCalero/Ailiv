const boeketten = [{
    name: 'boeket small',
    image: './_static/media/webshop/boeket--small.png',
    price: '€30',
    url: 'boeket.html?type=small',
}, {
    name: 'boeket medium',
    image: './_static/media/webshop/boeket--medium.png',
    price: '€40',
    url: 'boeket.html?type=medium',
}, {
    name: 'boeket large',
    image: './_static/media/webshop/boeket--large.png',
    price: '€50',
    url: 'boeket.html?type=large',
}];

(() => {

    for (let i = 0; i < boeketten.length; i++) {

        console.log("initializing data-injection..");
    
        let html = `
            <div class="flexbox--webshop">
                <a href="${boeketten[i].url}">
                    <img src="${boeketten[i].image}" alt="">
                    <div class="innerflex--webshop">
                        <h3>${boeketten[i].name}</h3>
                        <p>${boeketten[i].price}</p>
                    </div>
                </a>
            </div>`;

        document.getElementById("webshop").innerHTML += html;
        
        //fancy overbodige console.log :)
        console.log("completed initializing data-injection number", i+1)

        }

})();