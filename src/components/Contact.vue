<template>
    <div class="contact">  
        <h1 style="font-family:Lobster, monospace;">Contact me...</h1>
        <input type="text" v-model="name" placeholder="Name here" required />
        <input type="text" v-model="email" placeholder="Email here" required /> 
        <textarea v-model="message" cols="30" rows="5"></textarea>
        <button @click="contactMe" class="button">Contact me</button>   
        <!-- <p v-show="Feedback">Your email was successfully sent</p> -->
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                name: '',
                email: '',
                message: '',
                // Feedback: true
            }
        },

        methods: {
            contactMe() {
                let data = {
                    service_id: 'melodyohaji1731_gmail_com',
                    template_id: 'template_FJs2R58S',
                    user_id: 'user_EHGZRPuZFnzCcLXipqfnK',
                    template_params: {
                        'message_html': this.message,
                        'from_name': this.name,
                        'from_email': this.email  
                    }
                }

                axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
                .then(() => {
                    alert('Your mail is sent!')
                    // Feedback(true)
                })
                .catch(e => {
                     alert('Oops... ' + JSON.stringify(e));
                })
            }
        
        },

        // mounted() {
        //     let script = document.createElement('script')
        //     script.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
        //     document.body.appendChild(script)

        //     (function(){
        //         emailjs.init("user_EHGZRPuZFnzCcLXipqfnK");
        //     })();
        //             }
    }
</script>
<style scoped>
.contact h1 {
    color: #f9f9f9;
    /* text-transform: uppercase; */
    margin-bottom: 50px;
}
.contact{
    display: grid;
    grid-gap: 10px;
    /* height: 80vh;  */
    padding: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 50px 50px 50px 120px 50px;
}
.contact-inner{
    background: red;
}
input, textarea{
    background: transparent;
    border: 0;
    border-bottom: 2px solid #666;
    color: #f9f9f9;
}
input:hover, textarea:hover{
    border: 0;
    border-bottom: 2px solid rgb(245, 238, 238);
}
input:focus, textarea:focus{
    outline: none;
}
/* .button{
    width: 200px;
} */
.button {
	border: none;
	background: #4A1213;
	color: #f2f2f2;
	padding: 10px;
	font-size: 18px;
	border-radius: 5px;
	position: relative;
	box-sizing: border-box;
	transition: all 100ms ease; 
}
/* Animation 1 Horizontal immersion */
.button:before {
	content:'';
	position: absolute;
	top: 0px;
	left: 0px;
	width: 0px;
	height: 42px;
	background: rgba(255,255,255,0.3);
	border-radius: 5px;
	transition: all 300ms ease;
}
.button:hover:before {
	width: 100%;
} 

</style>