function my_Dictionary() {
    var Car = {
        Make: "Merecedes"
        Model: "E300"
        Engine: "V6"
        Year: 2022
        Color: "White"
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML = Car.Color;
}