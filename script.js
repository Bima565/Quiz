document.getElementById('registrationForm').addEventListener('input', function() {
    let valid = true;

    function validateInput(id, condition) {
        let inputElement = document.getElementById(id);
        if (condition) {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            valid = false;
        } else {
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        }
    }

    validateInput('nama', document.getElementById('nama').value.trim().length < 3);
    validateInput('email', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value.trim()));
    validateInput('password', document.getElementById('password').value.length < 8);
    validateInput('confirmPassword', document.getElementById('confirmPassword').value !== document.getElementById('password').value)
    let dobValue = document.getElementById('dob').value;
    validateInput('dob', dobValue === "" || new Date(dobValue).getFullYear() > 2006);
    validateInput('phone', !/^08[0-9]{9,11}$/.test(document.getElementById('phone').value.trim()));

    let allValid = document.querySelectorAll('.is-invalid').length === 0;
    document.querySelector("button[type='submit']").disabled = !allValid;
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    Swal.fire({
        title: "Pendaftaran Berhasil!",
        text: "Anda telah berhasil mendaftar.",
        icon: "success",
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById("registrationForm").reset();
            document.querySelectorAll(".is-valid, .is-invalid").forEach(el => {
                el.classList.remove("is-valid", "is-invalid");
            });
            document.querySelector("button[type='submit']").disabled = true;
        }
    });
});