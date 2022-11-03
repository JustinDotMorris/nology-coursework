//Challenge No 1
function HandlePositiveNegativeNumber(event) {

    let EnteredNumber = event.target.value;

    if (EnteredNumber >= 0) {
        alert("Positive");
    }
    else {
        alert("Negative")
    }
}

//Challenge No 2
function HandleDaysToAge(event) {

    let Days = event.target.value;
    let Age = Days/365;
    Age.toFixed(2);

    alert(Age);
}

//Challenge No 3