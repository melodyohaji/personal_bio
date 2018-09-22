<template>
    <div class="body">
          
                   
                <div class="grid-container">
                    <div class="grid-item">
                       <img src="../assets/images/profile.jpg" style="width:150px">
                       
                        <h2><strong>Hello!!! <br>
                            Ohaji Melody,<br> is so glad to welcome you to his "little world" of <br> exciting innovations and ideas... </strong>
                        </h2>
                    
                    </div>
                     <div class="grid-item-1">
                        <div class="quotetext">
                            <p v-show="item">{{ item.quote }} <br>Author: {{ item.author }}</p>
                        </div> 
                    </div>
                </div>
            
                               
       
    </div>
</template>


<script>
let myOuterText = 55;

    import axios from 'axios'
    export default {
        data() {
            return {
                quotes: '',
                item: ''
            }
        },

        methods: {
            getQuote() {
                let self = this

                axios
                .get('https://talaikis.com/api/quotes')
                .then(function(response){
                    self.quotes = response.data.filter(item => {
                        if(item.quote.indexOf('America') == -1) {
                            return item
                        }
                    })
                })
                .catch(function(e){
                    alert(e)
                })
            },
            
            getRandomQuotes() {
                let self = this
                setInterval(function(){
                    self.item = self.quotes[Math.floor(Math.random()*self.quotes.length)]
                }, 10000)
               
            }
                
        },

        mounted() {
            this.getQuote()
            this.getRandomQuotes()
        }
    
    }
       
           
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Fjalla+One";
@import "https://fonts.googleapis.com/css?family=Caveat";


h2 {
    text-align: center;
    padding-top: 20px;
    font-family: 'Caveat', cursive;
}
footer{
    background: #02082c;
    width: 100%;
   }
img {
    border-radius: 20%;
    
}
img:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 0.5s; 
    /* When the animation is finished, start again */
    animation-iteration-count: infinite; 
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.grid-item {

   color: bisque;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  font-family: 'Caveat', cursive;
}
.grid-item-1{
  min-width: 30px;  
  color: bisque;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 15px;
  text-align: center;
}
.quotetext{
    align-items: center;
    justify-items: center;
    text-align: center;
    color: rgb(236, 229, 220);
    /* transform: translateY(25%); */
    min-height: 60px;
}
</style>