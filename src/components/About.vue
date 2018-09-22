<template>
    <div class="aboutpage">
        <h1 style="font-family:Lobster, monospace;">A tip of the iceberg about me...</h1>
      
       

        <article class="writeup">
             <p v-show="loading">Please wait...</p>
            <p> My name is Ohaji Melody, a graduate of Babcock University,<br>
                Department of Anatomy (Benjamin S. Carson, School of Medicine), Ogun State, Nigeria...<br>
                
                I am a front-end Web developer with a 2month skill/experience!!!<br>
                YESSS...you read that right...<br>
                it is never about how long, but how much...<br>
            </p>

           <p> Prior to this time, I have a talent-driven passion for football -playing, watching and analyzing...<br>
               and dream to become a Cardio-Thoracic Surgeon is still very much alive.<br>
               Although, lately I also realized that alot of problems in any technologized society today can be solved by Web development, <br>
               as the internet is a window to foster communication across the globe,<br>
               thus, this has made me very enthusiastic and curious about Web development and design...<br>
           </p>

           <p>I look forward to expanding my knowlegde and horizons in web development and design as much as I can,<br>
              as I enjoy every moment of my journey into the programming world,<br>
              I would also want you to challenge yourself with new skills and believe you can be among the best no matter how new you are to that field!!!
            </p>

        </article>


    </div>
</template>

<script>

    

    export default {
        data() {
            return {
                results: '',
                loading: true
            }
        },

        methods: {
            getTodos() {
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => {
                    this.loading = false
                    this.results = json
                })
            
            }
        },

        mounted() {
            this.getTodos()
        }
    }
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed";
@import "https://fonts.googleapis.com/css?family=Caveat";

.writeup {
    color: bisque;
    font-size: 20px; 
    text-align: justify; 
    padding: 30px;
   
   font-family: 'Fira Sans Extra Condensed', sans-serif;
}
h1{
   color: bisque;
    padding-top: 30px;
}
.aboutpage{
   
   font-size: 30px;
  text-align: center;
  font-family: 'Caveat', cursive;
   font-family: 'Fira Sans Extra Condensed', sans-serif;
}

</style>