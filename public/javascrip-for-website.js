'use strict'
//Global vars


//Funtions

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

    function openJsInfo(){
        const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=1200,height=500,left=90,top=100`;//For popUp
        const csUrl = 'https://es.javascript.info/'
        open(csUrl, "test", params);
    }

    function codeEditor(){
      const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
      width=1290,height=590,left=40,top=50`;//For popUp
      const csUrl = 'https://www.mycompiler.io/es/new/nodejs'
      open(csUrl, "test", params);
    }