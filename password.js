const password = "password"



const errorArray = []

    if (password.length < 10) {
        errorArray.push('password is not long enough')
    }
    if (!/[a-z]/i.test(password)) {
        errorArray.push('Password has no letters')
    }
    if (!/\d/.test(password)) {
        errorArray.push('password has no numbers.')
    } 
    if (errorArray.length === 0) {
        console.log('sucess')
    } else {
        console.log('password was bad for the following reasons')
        for (let i = 0; i < errorArray.length; i++) {
            console.log(errorArray[i])
        }
    }








// let numbersAndLetters = true
// let upperCase = true
// let forbiddenWord = "password"

// if (password >= 10 && numbersAndLetters ) {
//     console.log('success message')
// } else if (password < 10 && numbersAndLetters) {
//     console.log('failure message')
// } else if (password >= 10 && numbersAndLetters || upperCase) {
//     console.log('Very strong password')
// } else if (password <= 10 && !numbersAndLetters || forbiddenWord) {
//     console.log('can not use password')
// } else {
//     console.log('recreate a different password')
// }
