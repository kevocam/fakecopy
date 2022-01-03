document.getElementById('text').addEventListener('copy', (e) => {
    e.clipboardData.setData("text/plain", "Texto modificado 😀")
    e.preventDefault();
})