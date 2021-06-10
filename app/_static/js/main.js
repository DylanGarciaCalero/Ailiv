const products = [{
    type: 'small',
    description: 'boeket small',
    image: '_static/media/webshop/boeket--small.png',
    price: '€30',
}, {
    type: 'medium',
    description: 'boeket medium',
    image: '_static/media/webshop/boeket--medium.png',
    price: '€40',
}, {
    type: 'large',
    description: 'boeket large',
    image: '_static/media/webshop/boeket--large.png',
    price: '€50',
}];

(() => {
    
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const urlType = params.get('type');

    if (urlType !== null) {
        let item;
        for (let i = 0; i < products.length; i++) {
            if (products[i].type === urlType) {
                item = products[i];
                console.log(urlType);
            }
        }

        if (item) {

            console.log("initializing data-injection..");

            let $price = item.price;
            document.getElementById("price").innerHTML = $price;
            
            let $description = item.description;
            document.getElementById("description").innerHTML = $description;

            let $image = `<img src="${item.image}" alt="Boeket ${item.type}">`;
            document.getElementById("image").innerHTML = $image;

            console.log("completed initializing data-injection!")
        }

    } else {
        
        console.log("not available");

        let $type = "type not available";
        document.getElementById("type").innerHTML = $type;
            
        let $description = "description not available";
        document.getElementById("description").innerHTML = $description;

        let $image = "image not available";
        document.getElementById("image").innerHTML = $image;
    }


})();
