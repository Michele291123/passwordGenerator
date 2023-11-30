function generaPasswordLunghezza() {
    const lunghezzaInput = document.getElementById("pwl").value;
    const p = document.getElementById("password-generated");
  
    function generaPasswordlunghezza(lunghezza) {
      const caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_';
    
      let password = '';
      for (let i = 0; i < lunghezza; i++) {
        const carattereCasuale = caratteri.charAt(Math.floor(Math.random() * caratteri.length));
        password += carattereCasuale;
      }
    
      return password;
    }
  
    const lunghezzaPassword = parseInt(lunghezzaInput, 10);
    const nuovaPassword = generaPasswordlunghezza(lunghezzaPassword);
    p.textContent = nuovaPassword;
}

function copiaPassword() {
    const password = document.getElementById("password-generated").textContent;
  
    const inputTemporaneo = document.createElement("input");
    inputTemporaneo.setAttribute("type", "text");
    inputTemporaneo.setAttribute("value", password);
    document.body.appendChild(inputTemporaneo);
  
    inputTemporaneo.select();
    inputTemporaneo.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
  
    document.body.removeChild(inputTemporaneo);
}