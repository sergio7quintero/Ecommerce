fetch(`products.json`)
    .then((response) => response.json()) //converts the response as a JSON 
    .then((data) => {
        data.shoes.forEach((element) => {
            console.log(element)
            let picture = element["picture"];
            let name = element["shoe-name"];
            let description = element["shoe-description"];
            let price = element["shoe-price"];

            //creating a new div in my html
            const shoeCard = document.createElement("div");

            //adding a class to the div I just created
            shoeCard.classList.add["productView"];
            const html = `
            <div class="shoeImages"><img src="${picture}" class="pictures"</div>
            <p>${name}</p>
            <p>${description}</p>
            <p class="shoe-cost">${price}</p>
            <div class="addCart"><button class="addToCart">Add to Bag</button></div>
            `;

            shoeCard.innerHTML = html;
            document.getElementById("shoe-container").appendChild(shoeCard);

        });
});

