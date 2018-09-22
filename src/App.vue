
<template>
    
    <div id="app">
        <nav class="navbar">
            <div class="container-fluid mobile-container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/"><p class="mylogo">OhajiMelody</p></a>
                </div>
                <div class="navbar-right">
                    <router-link to="/"> Home</router-link>
                    <router-link to="/about"> About</router-link>
                    <router-link to="/contact"> Contact</router-link>
                    <router-link to="/projects"> Portfolio</router-link>
                    
                </div>
            </div>
        </nav>
       
        <div class="app-content">
            <router-view></router-view>
        </div>
        
        <footer style="align-self: end">
           
            <div class="container text-center">
                <p class="text-muted credit" style="color:#fff">
                <a href="https://m.facebook.com/melody.nani" class="fa fa-facebook"></a>
                <a href="https://mobile.twitter.com/melody_ohaji" class="fa fa-twitter"></a>
                <a href="https://instagram.com/melodyohaji" class="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/melody-ohaji-335015142?originalSubdomain=ng" class="fa fa-linkedin"></a>
                </p>
            </div>
        </footer>        
    </div>


</template>


     
<script>

 export default {


 }
</script>

<style>
 @import 'http://fonts.googleapis.com/css?family=Arizonia';
 @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
 @import "https://fonts.googleapis.com/css?family=Pacifico";

html{
    height: 100%;
}
body{
    background: url('./assets/images/brick.jpg');
    background-size: cover;
    /* border-top-right-radius: 700px 800px; */
    /* min-height: 100vh; */
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;

}
.app-content{
    flex: 1 0 auto;
}

.router-link-active {
    color: #f9f9f9;
}
.navbar-right a{
    color: #f9f9f9;
    text-decoration: none;
    margin-left: 20px;
}
.navbar-right a:hover{
    color: #f9f9f9;
    text-decoration: none;
}

@media(max-width: 420px) {
    .navbar-brand{
        font-size: 0.6rem;
        
    }
    .router-link-active {
        margin-left: 2px;
    }
    .mobile-container{
        padding-left: 0;
        color: bisque;
    }
}

@media only screen and (max-width: 600px) {
    footer{
    /* background: #02082c; */
    /* width: 100%; */
    }
}
.mylogo{
  font-family: 'Pacifico', cursive;
  color:#C1A18C;
  text-shadow: 4px 4px 0px rgba(0,0,0,0.1);  
}



.fa {
    /* padding: 30px; */
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
    
} 

footer{
     position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;

}
</style>














