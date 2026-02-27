const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
 
let count = 0;
 
btns.forEach(function (btn) {
         btn.addEventListener('click', function (e) {
         const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
             count--;
         } else if (styles.contains('increase')) {
             count++;
        } else {
             count = 0;
        }
         value.textContent = count;

				if (count > 0) {
            value.style.color = "rgba(26, 112, 26, 1)";
        } else if (count < 0) {
            value.style.color = "rgba(124, 32, 32, 1)";
        } else {
            value.style.color = "#222";
        }
 });
}); 