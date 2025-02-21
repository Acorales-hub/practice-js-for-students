'use strict'
//Global vars
    let showResp = document.getElementById('show')
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=1200,height=500,left=90,top=100`;//For popUp

    function greet(){//greet (saludar)
        alert('Hello Coders!')
        showResp.innerHTML = '<h1 class="display-5 fw-bold">Hello, coders world!</h1><p class="col-md-8 fs-4">Hello Coders from the function greet.</p>'
    }

    function codeStructure(){
        const csUrl = 'https://es.javascript.info/structure'
        open(csUrl, "test", params);
    }

    function useStrict(){
      const csUrl = 'https://es.javascript.info/strict-mode'
      open(csUrl, "test", params);
    }

