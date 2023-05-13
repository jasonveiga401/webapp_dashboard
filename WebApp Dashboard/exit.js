document.addEventListener ("DOMContentLoaded", () => {

    window.onload = function(){
        document.getElementById('erase').onclick = function(){
            this.parentNode.remove();
            return false;
        };
    };
  
});



