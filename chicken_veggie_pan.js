// Incrediantial table (Yves)

// Basic-Inputbox-Value of incredients
const incrediantial_base_value = 1;

// object-list for incredients
const incredients = {
    //id`s connected to table id`s in the HTML document

    //ID`s                             // params
  hähnchenbrustfilet:   { amount: 300, unit: "g"    },
  paprika:              { amount: 1, unit: ""     },
  zuccini:              { amount: 1, unit: ""     },
  zwiebel:              { amount: 1, unit: ""     },
  olivenoel:            { amount: 1, unit: "EL"    },
  paprikapulver:        { amount: 1, unit: "TL"    },
  sahne:                { amount:  150, unit: "ml"     },
};

// target the formular
const form = document.getElementById("portion_form");
// target the inputbox
const input = document.getElementById("portion_input");


// at Event (button) "submit", start the function "e"
form.addEventListener("submit", e => {
    
    e.preventDefault();  //deleting of Inputvalue, after click on Button, off

    const portions = parseFloat(input.value);   //portions is now linked to the inputbox-value,
                                                // "parseFLoat" make input-value to an "number"
    
    if (isNaN(portions) || portions <= 0) {
        alert("Bitte eine gültige Zahl eingeben.");
        return;
        //returns an alert-desktop-message if nothing in the inputfield 
    }

    // "object.entries" target our incredients, and "forEach" target every "ID`s" we set before
    // key is an jscript specific variable, that target every object in out incredients variable,
    // "table" + "unit" targets the param, we set in the objectlist
    Object.entries(incredients).forEach(([key, {amount, unit}]) => {

        // our result, which is showed in the table will be calculated if we take the "amount"-param,
        // which we divided bei base-value of our inputbox and take it "portions" times, the value of our inputbox we give
        const result = (amount / incrediantial_base_value) * portions;

        // the "key" param targets every table td, we added to our object list
        // now we add the "textContent" above the ID`s in the objectlist, with the "result" variable and the unit we defined in our objectlist
        // "toFixed" set the numberlenght after the comma
        document.getElementById(key).textContent = `${result.toFixed(0)} ${unit}`;
    })
})


// IM SORRY FOR MY BAD ENGLISH, BUT I WANTED TO DO IT PROFESSIONELL xD