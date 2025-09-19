// Incrediantial table (Yves)

const incrediantial_base_value = 1;

const incredients = {
  hähnchenbrustfilet:   { amount: 300, unit: "g"    },
  paprika:              { amount: 1, unit: ""     },
  zuccini:              { amount: 1, unit: ""     },
  zwiebel:              { amount: 1, unit: ""     },
  olivenoel:            { amount: 1, unit: "EL"    },
  paprikapulver:        { amount: 1, unit: "TL"    },
  sahne:                { amount:  150, unit: "ml"     },
};

const form = document.getElementById("portion_form");
const input = document.getElementById("portion_input");

form.addEventListener("submit", e => {
    e.preventDefault();

    const portions = parseFloat(input.value);
    
    if (isNaN(portions) || portions <= 0) {
        alert("Bitte eine gültige Zahl eingeben.");
        return;
    }

    Object.entries(incredients).forEach(([key, {amount, unit}]) => {
        const result = (amount / incrediantial_base_value) * portions;
        document.getElementById(key).textContent = `${result.toFixed(0)} ${unit}`;
    })
})