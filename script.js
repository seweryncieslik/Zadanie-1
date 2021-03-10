var i;
const ol = document.body.querySelector('ol');
    
    for (i = 1; i<=11; i++) {
        let li = document.createElement('li');
        li.textContent = `Seweryn ${i}`;
        ol.appendChild(li);
    }