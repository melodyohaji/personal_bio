<template>
    <div class="grid-container">
        <h1 style="font-family:Lobster, monospace; color:aliceblue; font-size: 30px;">Welcome to a collection of <router-link to="/"> OhajiMelody's </router-link> recent Project works...</h1>
            <div class="grid-item-1" onclick="location.href='https://ohajimelody.com';"> 
                Project Description: Bio/Profile Site <br>
                Frameworks: Vue.js <br>
                Site Name: www.ohajimelody.com<br>
                Tech: HTML:5, Quote Api<br>
                Duration: 3weeks

            </div>

            <div class="grid item-2">
                our project
            </div>
                
    </div>
   
</template>

<script>
    export default {
        
    }
</script>
 <style scoped>
.grid-container{
    display: grid;
    /* grid-gap: 10px;
    min-height: 100vh;
    padding: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 50px 50px 50px 120px 50px; */
   
}

.grid-item-1{
    color:beige;
     cursor: pointer;
    border: 5px double bisque;;
}
 </style>
 