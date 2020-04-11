export default{
    props: ['currentuser'],

    template: `
    <div class='container settingsPage'>
    <p class='kidIcon' v-if='currentuser.permissions == 0'>Kids</p>
        <img :src="'images/user/' + currentuser.avatar">
        <h1>{{ currentuser.fname }}</h1>
        <p>{{currentuser.uname}}</p>
        
        <ul>
            <li v-if="currentuser.permissions == 1"  v-on:click="changeUser()">Change User</li> <!-- change account -->
            <li v-on:click="logout()">Logout</li>
        </ul>
        <footer>
				<ul class="social">
					<li><i class="fab fa-facebook"></i></li>
					<li><i class="fab fa-twitter-square"></i></li>
					<li><i class="fab fa-google-plus-square"></i></li>
					<li><i class="fab fa-instagram"></i></li>
				</ul>
				<p class="copy">
				&copy; 2020 RokuFlashback - Malek F & Nick S
			</p>
		</footer>

        <nav class="footNav">
            <ul class="mainNav">
                <li><router-link :to="{ name: 'home', params: {currentuser: this.currentuser}}"><i class="fas fa-home"></i></router-link></li>
                <li><router-link :to="{ name: 'search', params: {currentuser: this.currentuser}}"><i class="fas fa-search"></i></router-link></li>
                <li><router-link :to="{ name: 'settings', params: {currentuser: this.currentuser}}"><i class="fas fa-cog"></i></router-link></li>
            </ul>
	    </nav>
    </div>
    `,

    methods:{
        logout() {
            // push user back to login page
            this.$router.push({ path: "/login" });
            this.authenticated = false;
          },
          changeUser(){
            this.$router.push({ path: "/users" });
          }
    }

}