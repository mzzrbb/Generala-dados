import './style.css';

const dados         = document.querySelectorAll('.dado');
const botonTirar    = document.getElementById('tirarDados');
const tiradas       = document.getElementById('tiradas');
const btnNuevoJuego = document.getElementById('JuegoNuevo');

let tiradaRestante = 3;


for(const dado of dados){
  dado.addEventListener('click',()=>{
    dado.classList.toggle('guardado');
  });
}

btnNuevoJuego.addEventListener('click',() =>{
   
  tiradaRestante = 3;
  tiradas.textContent = tiradaRestante;

  for(const dado of dados){
    if(dado.classList.toggle('guardado')){
      dado.classList.remove('guardado');
    }
    const 
    valor = 'X';
    dado.textContent = valor;
  
  }
  
  
  
})
    

  
botonTirar.addEventListener('click',()=>{
  if(tiradaRestante == 0){
    return alert('Turno terminado');
    
  };
  tirarDados();
  tiradaRestante --;
  tiradas.textContent = tiradaRestante;
});


function tirarDados(){
  for(let dado of dados){
    if(!dado.classList.contains('guardado')){
      const valor = Math.floor(Math.random()*6)+1;
      dado.textContent = valor;
      
    };
  };
  
};