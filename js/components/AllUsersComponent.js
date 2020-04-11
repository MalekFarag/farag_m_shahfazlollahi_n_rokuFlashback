import UserComponent from './UserComponent.js';

export default {
	template: `
	<div class="container allUsersPage">

		<h1 class="user-message">{{ message }}</h1>


		<div class="userList">
			<user v-for="(user, index) in userList" :liveuser="user" :key="index" />
		</div>

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
	</div>
	`,

	created: function () {
		this.fetchAllUsers();
	},

	data() {
		return {
			message: `Who's Using Roku?`,

			userList: []
		}
	},

	methods: {
		fetchAllUsers() {
			let url = './admin/admin_getusers.php?allusers=true';

			fetch(url) 
			.then(res => res.json())
			.then(data => this.userList = data)
			.catch((error) => console.error(error))
		}
	},

	components: {
		user: UserComponent
	}
}