export default{
    props: ['currentuser'],
    template: `
    <div class='container searchPage'>
    <div class='lightbox'>
        <span v-on:click='closelb()' class='xclose'>x</span>
        <span class='vidtitle'></span>
        <video src='videos/music_trailer.mp4' controls></video>
    </div>
        <p class='kidIcon' v-if='currentuser.permissions == 0'>Kids</p>
        <div class='searchBar'>
            <input type='text' placeholder='Search for Media' v-model='term'>
            <button @click='searchMedia'><i class="fas fa-search"></i></button>
        </div>

        <div v-if='currentuser.permissions == 1' class='resWrap'>
            <div class='searchResult' v-for='media in results'>
            <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                <div class='resInfo'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>
        </div>

        <div v-if='currentuser.permissions == 0' class='resWrap kidsResults'>
            <div class='searchResult' v-for='media in kidsResults'>
            <img v-on:click='getDataId()' :src="'images/media/' + media.art" :alt='media.file'>
                <div class='resInfo'>
                    <h4>{{media.title}}</h4>
                    <h6>{{media.year}}</h6>
                </div>
            </div>
        </div>

        <div v-if='noResults'>
            <p class='noRes'>No results were found...</p>
        </div>

        <div v-if='searching'>
            <p class='noRes'>Searching...</p>
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
        this.searchMedia();
        this.searchKidsMedia();
    },

    data(){
        return{
            term:'',

            results:[],
            kidsResults:[],
		    noResults:false,
            searching:false
        }
        
    },

    methods:{
        searchMedia() {
            this.searching = true;

            fetch(`./admin/admin_searchmedia.php?term=${this.term}`)
            .then(res=>res.json())
            .then(data => this.results = data)
            .catch((error) => console.log(error))
            .then(this.searching = false);
        },
        searchKidsMedia() {
            this.searching = true;

            fetch(`./admin/admin_searchkidsmedia.php?term=${this.term}`)
            .then(res=>res.json())
            .then(data => this.kidsResults = data)
            .catch((error) => console.log(error))
            .then(this.searching = false);
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