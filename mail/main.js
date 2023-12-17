let verifica = document.querySelector('#controlla');
let controllo =document.querySelector('.controllo');
let listaMail = ['oliver@gmail.com','elyvercio@gmail.com','elisaCurcio@gmail.com','francoBarbarini@gmail.com'];
verifica.addEventListener('click',function(){
    
    let mail = document.querySelector('#myMail').value ;
      if(mail==''){
        alert('il campo mail è obbligatorio non puoi lasciarlo vuoto')
        location.reload()
      }
    let container = document.querySelector('.container')
        container.style.height='60vh';
        container.style.transition='1.2s';
          

        if(container.style.height=='60vh'){
                controllo.style.opacity='1'
                controllo.style.transition='3s'
                   
        }
   
        if(listaMail.includes(mail)){
            document.querySelector('#mailVerificata').innerHTML='Ecco la mail che hai inserito'+" "+mail;
            document.querySelector('#Responso').innerHTML='Abbiamo verificato la tua mail e '+" "+mail+" "+" risulta nei nostri archivi benvenuto "
        } else{
            document.querySelector('#mailVerificata').innerHTML='Ecco la mail che hai inserito'+" "+mail;
            document.querySelector('#Responso').innerHTML='Abbiamo verificato la tua mail  e  '+" "+mail+" "+" purtroppo non risulta nei nostri archivi registrati "
        }
         
        document.querySelector('#myMail').value='';
})