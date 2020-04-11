export default {
    props: ['currentuser'],

    template: `
    <div class="container homePage">
    <div class='lightbox'>
        <span v-on:click='closelb()' class='xclose'>x</span>
        <span class='vidtitle'></span>
        <video src='videos/music_trailer.mp4' controls></video>
    </div>
    <p class='kidIcon' v-if='currentuser.permissions == 0'>Kids</p>
        <h1>Hey, {{ currentuser.fname }}!</h1>

        <div v-if='currentuser.permissions == 1' class='mediaWrap'>

            <h2>Trending Media</h2>
            <div class='mediaList'>
                <div class='mediaItem' v-for='media in trendList'>
                    <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>

            <h2>Movies</h2>
            <div class='mediaList'>
                <div class='mediaItem' v-for='media in movieList'>
                    <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>
        
            <h2>Shows</h2>
            <div class='mediaList'>
                <div class='mediaItem' v-for='media in showList'>
                    <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>

            <h2>Music</h2>
            <div class='mediaList'>
                <div class='mediaItem' v-for='media in songList'>
                    <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>
        </div>

        <div v-else class='kidsMediaWrap'>
        <h2>Child Friendly Media</h2>
            <div class='mediaList'>
                <div class='mediaItem' v-for='media in kidMediaList'>
                    <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>
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
    

        <nav class="footNav">
            <ul class="mainNav">
                <li><router-link :to="{ name: 'home', params: {currentuser: this.currentuser}}"><i class="fas fa-home"></i></router-link></li>
                <li><router-link :to="{ name: 'search', params: {currentuser: this.currentuser}}"><i class="fas fa-search"></i></router-link></li>
                <li><router-link :to="{ name: 'settings', params: {currentuser: this.currentuser}}"><i class="fas fa-cog"></i></router-link></li>
            </ul>
	    </nav>
    </div>
    `,

    created: function(){
        this.fetchMovies();
        this.fetchShows();
        this.fetchSongs();
        this.fetchTrend();
        this.fetchKidsMedia();
    },

    data(){
        return{
            movieList: [],
            showList: [],
            songList: [],
            trendList: [],
            kidMediaList: []
        }
    },

    methods:{
        fetchMovies(){
            let url = './admin/admin_getmovies.php';

            fetch(url)
            .then(res => res.json())
            .then(data => this.movieList = data)
            .catch((error) => console.log(error))
        },
        fetchShows(){
            let url = './admin/admin_getshows.php';

            fetch(url)
            .then(res => res.json())
            .then(data => this.showList = data)
            .catch((error) => console.log(error))
        },
        fetchSongs(){
            let url = './admin/admin_getsongs.php';

            fetch(url)
            .then(res => res.json())
            .then(data => this.songList = data)
            .catch((error) => console.log(error))
        },
        fetchTrend(){
            let url = './admin/admin_gettrending.php';

            fetch(url)
            .then(res => res.json())
            .then(data => this.trendList = data)
            .catch((error) => console.log(error))
        },
        fetchKidsMedia(){
            let url = './admin/admin_getkidsmedia.php';

            fetch(url)
            .then(res => res.json())
            .then(data => this.kidMediaList = data)
            .catch((error) => console.log(error))
        },
        getDataId(){
            let target = event.target;
            let vidsrc = target.alt;
            let titlecontent = target.parentElement.querySelector('h4').textContent;
            console.log(titlecontent);

            let lightbox = document.querySelector('.lightbox'),
                videobox = document.querySelector('video'),
                vidtitle = document.querySelector('.vidtitle');

            lightbox.classList.add('showlb');
            videobox.src = 'videos/' + vidsrc;
            vidtitle.textContent = titlecontent;
        },
        closelb(){
            let lightbox = document.querySelector('.lightbox'),
                videobox = document.querySelector('video');

            lightbox.classList.remove('showlb');
            videobox.pause();
        }
    }
}