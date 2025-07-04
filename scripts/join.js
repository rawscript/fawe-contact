
document.addEventListener("DOMContentLoaded", () => {
     emailjs.init("sYyFnWdhLfvie1M5j"); // Consider storing this in a config file later

    document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted"); // Debug line

    emailjs.sendForm("service_djhffwn", "template_jvzixyi", this)
        .then(() => {
        alert("Message sent successfully!");
        this.reset();
        setTimeout(() => {
            window.location.href = "../../index.html";
        }, 1500);
        }, (error) => {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong.");
        });
    });
});
