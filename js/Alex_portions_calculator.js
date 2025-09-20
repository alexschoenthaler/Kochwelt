
let tocalculatedportions = document.getElementsByClassName('calculated_value'); // Behaves like an array, but is not an array, it's an HTMLCollection. Therefore, not all array methods can be used.

// Save default values (call once when the page loads) (Alex)
function saveDefaultValues() {
    for (let i = 0; i < tocalculatedportions.length; i++) {
        tocalculatedportions[i].setAttribute('data-default', tocalculatedportions[i].innerHTML);
    }
}

// Reset to default values (Alex)
function resetCalculatedPortions() {
    for (let i = 0; i < tocalculatedportions.length; i++) {
        tocalculatedportions[i].innerHTML = tocalculatedportions[i].getAttribute('data-default');
    }
}
// portion calculculate(Alex)
function portioncalculation(ID){
   let portion = document.getElementById(ID).value;
   // Limit to max 20 portions with alert.
   if(portion>20){
    portion = 20;
     alert("maximal 20 Portionen berechenbar, es wird mit 20 berechnet");
   }
   //portions calculate
   for (let index = 0; index <  tocalculatedportions.length; index++) {
    let element= tocalculatedportions[index].innerHTML;
    let sringattheend = element.slice(3,10); // takes the unit of measurement and any text that may follow.
    let elementslice = element.slice(0,3); // takes the first three characters, which can be a number with one, two or three digits, and possibly a comma.
    let result = elementslice *portion;
    // If not a number, it can be a whole number with two digits.
    if (isNaN(result)){
        sringattheend = element.slice(2,10);
        result = element.slice(0,2)*portion    
    }
    // If still not a number, it must be a decimal with a comma.
    if(isNaN(result)){
        sringattheend = element.slice(3,10); 
        elementslice = element.slice(0,3);   
        let valuetoformat = elementslice.replace(/[,]/g, "."); // Replace comma with dot.
        valuetoformat= valuetoformat*portion;           // Calculate with dot as decimal separator.
        valuetoformat = valuetoformat.toFixed(1);       // Rounded to 1 decimal place.
        valuetoformat = valuetoformat.toString();       // Convert back to string.
        result = valuetoformat.replace(/[.]/g, ",");    // Replace dot with comma.
    }
    // Write back the result in the html.
    tocalculatedportions[index].innerHTML = result + sringattheend; 
   }
   
}

// Call directly when the page loads (Alex)
saveDefaultValues();