'use strict'

    function reloadwebsite(){//Reload the page
        location.reload()
    }

    function securityLinks(){//Security links 
        let sl = document.getElementsByTagName('a')
        let i
        for(i = 0; i <= sl.length; i++){
            sl[i].rel = 'noopener noreferrer';
        }
    }