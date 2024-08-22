
function generatePassword(length, includeLowercase, includeuppercase, includeNumbers, includeSymbols){
    const lowerCaseChars = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numberChars = '1234567890';
    const symbolsChars = '`~!@#$%^&*()_+-=[]{}\|;:",./<>?"'
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeuppercase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";
    
    if (length <= 0){
        return `(passowd length must be atleast 1)`
    }
    if (allowedChars.length === 0){
        return `At least 1 set of character needs to be selected`; 
    }
    for (let i; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    
    return password

}

const passwordLength = 10;
const includeLowercase = true;
const includeuppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeuppercase, 
                                includeNumbers, 
                                includeSymbols)
                    

console.log(`Generated Password: ${password}`)