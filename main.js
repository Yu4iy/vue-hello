// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
	el: '.app',
	data:{
		greater:'HELLO WORLD',
		img:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/03/03e2db963b50366638563aff851ce5bcc6ffbc4e_full.jpg',
 		titleClass:'red',
		count:0

	},
	methods:{
		changeColor(){
			this.titleClass = this.titleClass === 'red'? 'blue':'red';
			this.count++
			if(this.count === 4){
				this.greater = 'SMETTILA CLICCARE, e fai qualcosa di Utile 0_0'
			}
			
		},

	
	}
})









