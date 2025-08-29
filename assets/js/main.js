document.addEventListener("DOMContentLoaded", function() {
    const text = "We are a Compcode + Web Dev Coding Club";
    const target = document.querySelector(".text");
    target.textContent = ""; // Clear initial text

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        
        setTimeout(typeWriter, 45); // Fixed delay of 100ms
        // const delay = Math.random() * (120 - 40) + 40; // Random delay between 40ms and 120ms
        //     setTimeout(typeWriter, delay);
        }
    }

    typeWriter();
});