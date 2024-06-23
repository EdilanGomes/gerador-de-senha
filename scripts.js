function generatePassword() {

    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    
   
    const tamanhoDaSenha = 15; 
    
    
    const todas = maiusculas + minusculas + numeros;
    
    
    let senha = "";
    
  
    for (let i = 0; i < tamanhoDaSenha; i++) {
        const randomIndex = Math.floor(Math.random() * todas.length);
        senha += todas[randomIndex];
    }
    
 
    document.getElementById("senha").value = senha;
}
