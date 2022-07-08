

      function calcola() {
            let display = document.getElementById("display");
            let totale = eval(display.value)
            display.value = totale
        }

        function cancella(){

            display.value = ""
    
           }

        function aggiungiCarattere(bottone){
            let display = document.getElementById("display");
            let simbolo = bottone.getAttribute('carattere');

            console.log(bottone.innerHTML)
            console.log(bottone.getAttribute('carattere'))

            display.value += bottone.getAttribute('carattere')
        
        }

        function isSymbol(carattere){
            const simboli = ['*','/','+','-'];

            if(simboli.includes(carattere)){
                return true;
            }
            return false;

        }

        

      