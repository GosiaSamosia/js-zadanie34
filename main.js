var lubie = "Uwielbiam JavaScript";
var jestem = "Jestem świetnym programistą";

function omnie(lubie, jestem) {
    if (lubie>jestem===true) {
        return lubie;
    } else {
        return jestem;
    }
}

console.log(omnie(lubie, jestem));

/*
var lubie = "Uwielbiam JavaScript";
var jestem = "Jestem świetnym programistą";

var result;

function omnie(lubie, jestem) { 
    var wieksza = lubie + jestem;
    if (lubie>jestem) {
        return lubie;
    }else{
        return jestem;
    }
return wieksza;
}

console.log(omnie(lubie, jestem));
*/