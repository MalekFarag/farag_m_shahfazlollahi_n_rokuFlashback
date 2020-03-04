export default {
    template: `
        <div class="container">
            <div>
                <h1>Welcome to Flashback</h1>
                <form @submit.prevent="login">
                    <div>
                        <div>
                            <label for="inlineFormInputName">Username</label>
                            <input v-model="input.username" type="text" id="inlineFormInputName" placeholder="username" required>
                        </div>
                        <div>
                            <label for="inlineFormPassword">Password</label>
                            <input v-model="input.password" type="password"id="inlineFormPassword" placeholder="password" required>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>            
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            // debugger;
            if (this.input.username != "" && this.input.password != "") {
                // use the FormData object to collect and send our params
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data[0]);

                    // tell the app that we have a successful login
                    // and store the user object that we retrieved

                    // true below means that authentication worked
                    // data is the user we retrieved from the DB
                    this.$emit("authenticated", true, data[0]);

                    // push the user to the users page
                    this.$router.replace({name: "home"});                    
                })
                .catch((err) => console.log(err));

            } else {
                console.error("inputs can't be blank!");
            }
        }
    }
}