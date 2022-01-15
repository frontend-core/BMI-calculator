let height = document.getElementById("fheight");
let weight = document.getElementById("fweight");
let age = document.getElementById("fage");
let male = document.getElementById("fmale");
let female = document.getElementById("ffemale");
let us = document.getElementById("btn-us");
let si = document.getElementById("btn-si");

function validateForm() {
    if (height.value === "" || weight.value === "" || age.value === "" || male.checked === "" || female.check === "") {
        alert("Please don't miss field!");
        document.getElementById("btn-cal").removeEventListener("click", count);
    } else {
        count();
    }
}
document.getElementById("btn-cal").addEventListener("click", validateForm);
document.getElementById("btn-cal").addEventListener("click", count);
document.getElementById("btn-clr").addEventListener("click", function() {
    form.reset();

});

function count() {
    let BMI = Number(weight.value / ((height.value / 100) * (height.value / 100)));
    let PI = BMI / Number(height.value / 100);
    let result = "";
    if (BMI < 16) {
        result = 'Severe Thinness';
    } else if (BMI >= 16 && BMI <= 17) {
        result = 'Moderate Thinness';
    } else if (BMI > 17 && BMI <= 18.5) {
        result = 'Mild Thinness';
    } else if (18.5 < BMI && BMI <= 24.9) {
        result = 'Healthy';
    } else if (25 <= BMI && BMI <= 29.9) {
        result = 'Overweight';
    } else if (30 <= BMI && BMI <= 34.9) {
        result = 'Obese';
    } else if (35 <= BMI) {
        result = 'Extremely obese';
    }

    let bmi = document.createElement("h3");
    let textbmi = document.createTextNode("BMI: ");
    let valuebmi = document.createTextNode(parseFloat(BMI.toString()).toFixed(2));
    bmi.appendChild(textbmi);
    bmi.appendChild(valuebmi);
    document.getElementById("answer").appendChild(bmi);

    document.getElementById("i").innerHTML = parseFloat(BMI.toString()).toFixed(2);
    const slider = document.getElementById("slider");
    slider.style.marginLeft = parseFloat((BMI * 6.3 + 30).toString()).toFixed(2) + "px";

    let pi = document.createElement("h3");
    let textpi = document.createTextNode("PI: ");
    let valuepi = document.createTextNode(parseFloat(PI.toString()).toFixed(2));
    pi.appendChild(textpi);
    pi.appendChild(valuepi);
    document.getElementById("answer").appendChild(pi);

    let status = document.createElement("p");
    let textstatus = document.createTextNode("--> Your status: ");
    let valuestatus = document.createTextNode(result);
    status.appendChild(textstatus);
    status.appendChild(valuestatus);
    document.getElementById("status").appendChild(status);

    document.getElementById("btn-cal").removeEventListener("click", validateForm);
    document.getElementById("btn-cal").removeEventListener("click", count);
}