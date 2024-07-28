function generatePassword() {
    const userInput = document.getElementById('userInput').value;
    const passwordLength = parseInt(document.getElementById('passwordLength').value);
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const digits = '0123456789';
    const combinedChars = userInput + symbols + digits;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomChar = combinedChars.charAt(Math.floor(Math.random() * combinedChars.length));
        password += randomChar;
    }
    document.getElementById('generatedPassword').value = password;
}
function copyPassword() {
    const passwordField = document.getElementById('generatedPassword');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}