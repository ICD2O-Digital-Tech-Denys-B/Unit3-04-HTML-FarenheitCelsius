// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function calcCelsius() {
    let f = parseFloat(document.getElementById("F").value)
    let step1 = f-32
    let step2 = 5/9
    let step3 = step1*step2
    let answer=step3.toFixed(2)
    document.getElementById("answer").innerHTML = answer +"°C";
}