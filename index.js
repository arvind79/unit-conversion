/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
const feetInMeter = 3.281
const gallonInLiter = 0.264
const poundInKg = 2.204

function initialValues() {
    let value = inputEl.value

    let conversionLength = ""
    conversionLength += `${value} meters = ${meterToFeet(value)} feet | ${value} feet = ${feetToMeter(value)} meters `
    lengthEl.innerHTML = conversionLength

    let conversionVolume = ""
    conversionVolume += `${value} liters = ${literToGallon(value)} gallons | ${value} gallons = ${gallonToLiter(value)} liters`
    volumeEl.innerHTML = conversionVolume

    let conversionMass = ""
    conversionMass += `${value} kilos = ${kgToPound(value)} pounds | ${value} pounds = ${poundToKg(value)} kilos`
    massEl.innerHTML = conversionMass
}

initialValues()

convertBtn.addEventListener("click", function() {
    let value = inputEl.value

    let conversionLength = ""
    conversionLength += `${value} meters = ${meterToFeet(value)} feet | ${value} feet = ${feetToMeter(value)} meters `
    lengthEl.innerHTML = conversionLength

    let conversionVolume = ""
    conversionVolume += `${value} liters = ${literToGallon(value)} gallons | ${value} gallons = ${gallonToLiter(value)} liters`
    volumeEl.innerHTML = conversionVolume

    let conversionMass = ""
    conversionMass += `${value} kilos = ${kgToPound(value)} pounds | ${value} pounds = ${poundToKg(value)} kilos`
    massEl.innerHTML = conversionMass
})

function feetToMeter(length) {
    let res = (length/feetInMeter).toFixed(3)
    return res
}

function meterToFeet(length) {
    let res = (length*feetInMeter).toFixed(3)
    return res
}

function gallonToLiter(volume) {
    return (volume/gallonInLiter).toFixed(3)
}

function literToGallon(volume) {
    return (volume*gallonInLiter).toFixed(3)
}

function poundToKg(mass) {
    return (mass/poundInKg).toFixed(3)
}

function kgToPound(mass) {
    return (mass*poundInKg).toFixed(3)
}
