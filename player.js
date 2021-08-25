function playerStyle (player){
player.style.border = '1px solid red';
 player.style.padding = '15px';
 player.style.margin= '15px';
 player.style.borderRadius = '15px'
}
const playserStyle= document.getElementsByClassName('player');
for(let habijabi of playserStyle){
  playerStyle(habijabi);
  habijabi.addEventListener('click',function(){
    habijabi.style.background = 'red';
  })
}

function addPlayer(){
  const playersContainer = document.getElementById('players');
  const player = document.createElement('div');
  player.classList.add('player');
  player.innerHTML = `
   <h1 class="palyer-name">Player-4</h1>
                <p>Soluta voluptate commodi, dignissimos maiores atque fuga ipsa. Asperiores accusamus facere tempora
                    aliquid laudantium, adipisci ullam natus iusto dolorem culpa maiores voluptates eveniet voluptate
                    nulla ratione quis quibusdam hic perspiciatis.</p>
  `
  playerStyle (player);
  playersContainer.appendChild(player);
 
}
document.getElementById('players').addEventListener('click',function(event){
   if(event.target.tagName.toLowerCase()=='div'){
     event.target.style.backgroundCOlor= 'red';
   }else{
     event.target.parentNode.style.backgroundCOlor = 'red';
   }
})