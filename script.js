document.getElementById('generateBtn').addEventListener('click', function() {
    var passwordLength = document.getElementById('passwordLength').value;
    var includeUppercase = document.getElementById('uppercase').checked;
    var includeLowercase = document.getElementById('lowercase').checked;
    var includeNumbers = document.getElementById('numbers').checked;
    var includeSpecial = document.getElementById('special').checked;

    var charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecial) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
        password += randomChar;
    }

    document.getElementById('passwordResult').value = password;
});

document.getElementById('saveBtn').addEventListener('click', function() {
    var passwordToSave = document.getElementById('passwordResult').value;
    
  
    navigator.clipboard.writeText(passwordToSave)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
});