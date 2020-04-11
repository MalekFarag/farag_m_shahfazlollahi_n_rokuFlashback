export default {
    props: ['liveuser'],

    template: `
    <div class="userComponent">
        <div class="userComp" @click="navToUserHome()">
            <div class="userImgCon">
                <img :src="'images/user/' + liveuser.avatar">
                <p>{{ liveuser.fname }}</p>
            </div>
        </div>
    </div>`,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avatar === "null") {
            this.liveuser.avatar = "temp_avatar";
        }
    },

    methods: {
        navToUserHome() {

            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "home", params: { currentuser: this.liveuser }})
        }
    }

}