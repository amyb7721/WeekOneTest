let password
console.log('Password123')
let numbersAndLetters = true
let upperCase = true
let forbiddenWord = "password"

if (password >= 10 && numbersAndLetters ) {
    console.log('success message')
} else if (password < 10 && numbersAndLetters) {
    console.log('failure message')
} else if (password >= 10 && numbersAndLetters || upperCase) {
    console.log('Very strong password')
} else if (password <= 10 && !numbersAndLetters || forbiddenWord) {
    console.log('can not use password')
} else {
    console.log('recreate a different password')
}
