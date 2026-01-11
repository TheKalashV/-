async function checkInternet() {
    if (navigator.onLine == false) {
        window.location.replace('offline.html');
        return;
    }
    try {
        await fetch('https://www.google.com/favicon.ico?p=' + Date.now(), {
            mode: 'no-cors',
            cache: 'no-store'
        });
        console.log("Есть подключение");
    } catch (error) {
        window.location.replace('offline.html');
    }
}
setInterval(checkInternet, 5000);
window.addEventListener('offline', function () {
    window.location.replace('offline.html');
});

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(function () {
            loader.classList.add('loader-hidden');
            setTimeout(function () {
                loader.style.display = 'none';
            }, 500);

        }, 1500);
    }
});