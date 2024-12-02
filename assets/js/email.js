(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "g9nnz425oX-sUwlpu",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_zstfhus', 'template_3f80rw5', this)
            .then(() => {
                console.log('SUCCESS!');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Message sent Successfully!",
                    showConfirmButton: false,
                    timer: 2500
                });
            }, (error) => {
                console.log('FAILED...', error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "can't send message",
                    showConfirmButton: false,
                    timer: 2500
                });
            });
    });
}