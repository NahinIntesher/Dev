const Pen = {
    name: "Parker Jotter",
    Class: "Standard",
    type: "Ball Pen",
    color: "Black",
    rating: 4.5,
    price: "270$"
}

var isClick = false;


function showInfo() {
    if (isClick == true) {
        Name.innerHTML = "1. Pen Name: " + Pen.name;
        Class.innerHTML = "2. Pen Class: " + Pen.Class;
        Type.innerHTML = "3. Pen Type: " + Pen.type;
        Color.innerHTML = "4. Pen Color: " + Pen.color;
        Rating.innerHTML = "5. Pen Rating: " + Pen.rating;
        Price.innerHTML = "6. Pen Price: " + Pen.price;
        isClick = false;
    }
    else {
        Name.innerHTML = "";
        Class.innerHTML = "";
        Type.innerHTML = "";
        Color.innerHTML = "";
        Rating.innerHTML = "";
        Price.innerHTML = "";
        isClick = true;
    }
}

insideButton.onclick = showInfo;