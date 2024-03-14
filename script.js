const btn1 = document.querySelector('#criptografar');
const btn2 = document.querySelector('#descriptografar');
const saida = document.querySelector('#saida__texto');
const copiar = document.querySelector('#copiar');


btn1.addEventListener("click", function() {
  let saidaTextoCrip = [];
  let entrada = document.querySelector('#entrada__texto');
  let entradaTexto = entrada.value;
  entradaTexto = entradaTexto.toLowerCase();
 
    //window.location.href = 'page1.html';
    for (let i = 0; i <= entrada.value.length; i++) {
      if (entradaTexto[i] == 'a') {
        saidaTextoCrip.push('ai');
      } else if (entradaTexto[i] == 'e') {
        saidaTextoCrip.push('enter');
      }else if(entradaTexto[i] == 'i'){
        saidaTextoCrip.push('imes');
      }else if(entradaTexto[i] == 'o'){
        saidaTextoCrip.push('ober');
      }else if(entradaTexto[i] == 'u'){
        saidaTextoCrip.push('ufat');
      }else{
        saidaTextoCrip.push(entradaTexto[i]);
      }
    }
    

  saidaTextoCrip = saidaTextoCrip.join("");
  document.getElementById('saida__texto').value = saidaTextoCrip;
}
);

btn2.addEventListener("click", function() {
  let saidaTexto = [];
  let entrada = document.querySelector('#entrada__texto');
  let entradaTexto = entrada.value;
  entradaTexto = entradaTexto.toLowerCase();
  saidaTexto = entradaTexto.replaceAll("ai", "a");
  entradaTexto = saidaTexto;
  saidaTexto = entradaTexto.replaceAll("enter", "e");
  entradaTexto = saidaTexto;
  saidaTexto = entradaTexto.replaceAll("imes", "i");
  entradaTexto = saidaTexto;
  saidaTexto = entradaTexto.replaceAll("ober", "o");
  entradaTexto = saidaTexto;
  saidaTexto = entradaTexto.replaceAll("ufat", "u");
  
  
  document.getElementById('saida__texto').value = saidaTexto;
}
);

copiar.addEventListener("click", ()=>{
  navigator.clipboard.writeText(saida.value);
});