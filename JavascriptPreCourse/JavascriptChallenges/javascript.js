function HandleCalculateGrades(event) {

    let grade = event.target.value;

    if (!grade) {
        return;
    }

    grade = grade.toUpperCase();

    let Percentage;
    switch (grade) {
        case "A":
            Percentage = "90-100%";
            break;
        case "B":
            Percentage = "75-90%";
            break;
        case "C":
            Percentage = "50-75%";
            break;
        case "D":
            Percentage = "25-50%";
            break;
        case "E":
            Percentage = "0-25%";
            break;
        case "F":
            Percentage = "0%";
            break;
    }

alert("The percentage was " + Percentage);
  
}