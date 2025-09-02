//navn
let navn = prompt('Hva heter du?')

console.log('Hei ' + navn)
console.log()

//kalkulator
let tall1 = prompt('Skriv inn et tall')

//Lar brukeren velge regnemåte selv istedenfor å vise ressultatet av alle samtidig.
console.log('Mulige regnemåter')
console.log('1 = +')
console.log('2 = -')
console.log('3 = *')
console.log('4 = /')

let regnemåte = prompt('Velg en regnemåte')
let tall2 = prompt('Skriv inn enda et tall')
let tall3 = null

//Sjekker hvilken regnemåte brukeren valgte og utregner
switch (regnemåte) {
    case '1':
        tall3 = Number(tall1) + Number(tall2)
        console.log(tall1 + ' + ' + tall2 + ' = ' + tall3)
        break
    case '2':
        tall3 = tall1 - tall2
        console.log(tall1 + ' - ' + tall2 + ' = ' + tall3)
        break
    case '3':
        tall3 = tall1 * tall2
        console.log(tall1 + ' * ' + tall2 + ' = ' + tall3)
        break
    case '4':
        tall3 = tall1 / tall2
        console.log(tall1 + ' / ' + tall2 + ' = ' + tall3)
        break
    default:
        console.log('Du har ikke valgt en gyldig regnemåte')
}

//Aldersjekk for øl
let alder = prompt('Hvor gammel er du?')

if (alder < 18) {
    console.log('Du får ikke kjøpe øl')
} else {
    console.log('Du får kjøpe øl')
}

console.log()

//Aldersjekk for bussbillett
if (alder < 18) {
    console.log('Du må kjøpe barnebillett.')
} else if (alder > 67) {
    console.log('Du må kjøpe voksenbillett.')
} else {
    console.log('Du må kjøpe honnørbillett.')
}