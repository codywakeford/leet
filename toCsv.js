let list = `Milk
Tin of coffee
Fairy non bio washing tablets 
Bread 
Salted butter
Spag Bol, big minced beef for burgers 
Big chicken breast 
Burger buns 
Ginger 
Lime
Courgette 
Celery 
Tuna 
Flat bread 
Tzatziki 
Halloumi 
Chips 
Hummus
Sausages 
Pizzas 
Goats cheese
Red onions 
Chorizo 
Cheese 
Whole chicken 
Maris piper pots
Carrots 
White onions 
Big toms 
Yorkshire puds 
Frozen veg
Sausage meat 
Tropical squash
Sausage dog buns
Sausages 
Gherkins 
Jalaps
Stir fry 
Sea bass 
Pak Choi 
Tender stem broc
Chillis
Mushies
Tinned toms
Wraps 
Lettuce 
Peppers 
Ready made pizzas`

function toCsv(strings) {
    let arr = strings.split("\n")

    for (let a of arr) {
        let hello = a.trim()
        console.log((hello += ",\n"))
    }
}

toCsv(list)
