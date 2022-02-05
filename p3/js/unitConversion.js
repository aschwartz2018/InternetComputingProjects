// Checks if 'a' is a true float
function isFloat(a) {
    if(parseFloat(a)==a)
        return true;
    else
        return false;
}


// Length Conversions

// 1 inch = 2.54 centimeters
// Converts from inches to centimeters
document.getElementById("in_to_cm").onclick = function () {
    var inches = document.getElementById("length").value;
    if(isFloat(inches)) {
        inches=parseFloat(inches);
        var report = function (inches) {
            document.getElementById("lengthResult").innerHTML =
                inches.toFixed(2) + " inches = " + (2.54*inches).toFixed(2) + " centimeters";
        }
        report(inches);
    } else {
        document.getElementById("lengthResult").innerHTML = "Please enter a number";
    }
};
// Converts from centimeters to inches
document.getElementById("cm_to_in").onclick = function () {
    var centimeters = document.getElementById("length").value;
    if(isFloat(centimeters)) {
        centimeters=parseFloat(centimeters);
        var report = function (centimeters) {
            document.getElementById("lengthResult").innerHTML =
                centimeters.toFixed(2) + " centimeters = " + (centimeters/2.54).toFixed(2) + " inches";
        }
        report(centimeters);
    } else {
        document.getElementById("lengthResult").innerHTML = "Please enter a number";
    }
};

// 1 foot = 12 inches
// Converts from inches to feet
document.getElementById("in_to_ft").onclick = function () {
    var inches = document.getElementById("length").value;
    if(isFloat(inches)) {
        inches=parseFloat(inches);
        var report = function (inches) {
            document.getElementById("lengthResult").innerHTML =
                inches.toFixed(2) + " inches = " + (inches/12).toFixed(2) + " feet";
        }
        report(inches);
    } else {
        document.getElementById("lengthResult").innerHTML = "Please enter a number";
    }
};
// Converts from feet to inches
document.getElementById("ft_to_in").onclick = function () {
    var feet = document.getElementById("length").value;
    if(isFloat(feet)) {
        feet=parseFloat(feet);
        var report = function (feet) {
            document.getElementById("lengthResult").innerHTML =
                feet.toFixed(2) + " feet = " + (12*feet).toFixed(2) + " inches";
        }
        report(feet);
    } else {
        document.getElementById("lengthResult").innerHTML = "Please enter a number";
    }
};


// Weight Conversions

// 1 kilogram = 2.205 pounds
// Converts from pounds to kilograms
document.getElementById("lb_to_kg").onclick = function () {
    var lb = document.getElementById("weight").value;
    if(isFloat(lb)) {
        lb=parseFloat(lb);
        var report = function (lb) {
            document.getElementById("weightResult").innerHTML =
                lb.toFixed(2) + " pounds = " + (lb/2.205).toFixed(2) + " kilograms";
        }
        report(lb);
    } else {
        document.getElementById("weightResult").innerHTML = "Please enter a number";
    }
};
// Converts from kilograms to pounds
document.getElementById("kg_to_lb").onclick = function () {
    var kg = document.getElementById("weight").value;
    if(isFloat(kg)) {
        kg=parseFloat(kg);
        var report = function (kg) {
            document.getElementById("weightResult").innerHTML =
                kg.toFixed(2) + " kilograms = " + (kg*2.205).toFixed(2) + " pounds";
        }
        report(kg);
    } else {
        document.getElementById("weightResult").innerHTML = "Please enter a number";
    }
};

// 1 kg = 1000 g
// Converts from grams to kilograms
document.getElementById("g_to_kg").onclick = function () {
    var g = document.getElementById("weight").value;
    if(isFloat(g)) {
        g=parseFloat(g);
        var report = function (g) {
            document.getElementById("weightResult").innerHTML =
                g.toFixed(2) + " grams = " + (g/1000).toFixed(2) + " kilograms";
        }
        report(g);
    } else {
        document.getElementById("weightResult").innerHTML = "Please enter a number";
    }
};
// Converts from kilograms to grams
document.getElementById("kg_to_g").onclick = function () {
    var kg = document.getElementById("weight").value;
    if(isFloat(kg)) {
        kg=parseFloat(kg);
        var report = function (kg) {
            document.getElementById("weightResult").innerHTML =
                kg.toFixed(2) + " kilograms = " + (kg*1000).toFixed(2) + " grams";
        }
        report(kg);
    } else {
        document.getElementById("weightResult").innerHTML = "Please enter a number";
    }
};