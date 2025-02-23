function toggleForms() {
    document.getElementById('login-box').classList.toggle('hidden');
    document.getElementById('signup-box').classList.toggle('hidden');
}

// لاگ ان فارم سبمٹ کریں
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (email && password) {
        alert('لاگ ان کامیاب!');
        // یہاں API یا ڈیٹا بیس کی انٹیگریشن کی جا سکتی ہے
    } else {
        alert('برائے مہربانی تمام فیلڈز پر کریں۔');
    }
});

// سائن اپ فارم سبمٹ کریں
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    if (name && email && password) {
        alert('اکاؤنٹ کامیابی سے بن گیا!');
        toggleForms(); // سائن اپ کے بعد لاگ ان پر لے جائیں
    } else {
        alert('برائے مہربانی تمام فیلڈز پر کریں۔');
    }
});