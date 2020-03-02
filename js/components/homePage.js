export default{
      template:`
      <div class='container'>
      <header class="mainHeader">
      <div class="topNav">
          <div class="topNavIcon">
              <!-- dynamic logo depending on what media youre currently using -->
              <!-- music or movie -->
              <div v-if='user.isMusic'>
              <i class="fas fa-music"></i> 
              </div>
              <div v-else>
                  <i class="fas fa-play"></i>
              </div>
              
  
          </div>
  
              <div @click='userMedia()' role="button" :class="{ 'logged-in' :user.isLoggedIn }" >
                  <li v-if='user.isMusic' class="topNavItem">Roku Video</li>
                  <li v-else class="topNavItem">Roku Music</li>
              </div>
      </div>
  
      <!-- settings -->
      <router-link to="/settings" class="settings"><i class="fas fa-cog"></i></router-link>
      </header>
  
      <div class="content">
          <div v-if='user.isMusic' class="mediaContainer">
              <h1>Music</h1>
  
              <h3>Top Rock Artists</h3>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='rock in music.rock'>{{rock}}</li>
                  </ul>
              </div>
  
              <h3>Music by Years</h3>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='years in music.years'>{{years}}</li>
                  </ul>
              </div>
  
              <h3>Early 2000s Hits</h3>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='hits2k in music.hits2k'>{{hits2k}}</li>
                  </ul>
              </div>
          </div>	        	
  
  
          <!-- main content -->	        
          <div v-else class="mediaContainer">
              <h1>Film</h1>
              <h2>Genres</h2>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='genres in film.genres'>{{genres}}</li>
                  </ul>
              </div>
  
              <h3>Classic Horror Movies</h3>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='horror in film.horror'>{{horror}}</li>
                  </ul>
              </div>
  
  
              <h3>Movies by Year</h3>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='years in film.years'>{{years}}</li>
                  </ul>
              </div>
  
              <h3>Documentaries</h3>
              <div class="scrollList">
                  <ul>
                      <li class="scrollItem" v-for='documentaries in film.documentaries'>{{documentaries}}</li>
                  </ul>
              </div>
          </div>
          </div>
      </div>
      `,
  
      data: function(){
          return{
              user:{
              isMusic: true
          },
  
          music:{
              years: ['50s', '60s', '70s', '80s', '90s'],
              genres: ['Rock', 'Pop', 'Folk', 'Hip-Hop', 'Metal'],
              rock: ['Bruce Springsteen', 'Freddie Murcury', 'Jimi Hendrix', 'Elvis Presley', 'Paul McCartney'],
              hits2k: ['i got a feeling', 'crazy in love', 'hot in here', 'promiscuous', 'i kissed a girl']
          },
  
          film:{
              years: ['50s', '60s', '70s', '80s', '90s'],
              genres: ['Drama', 'Reality', 'Horror', 'Mystery', 'Sci-fi'],
              horror: ['the exorcist', 'the shinning', 'get out', 'psycho', 'a nightmare on elm street'],
              documentaries: ['american factory', 'fyre', 'knock down the house', 'icarus', 'free solo']
          }
          }
      },
  
      methods:{
          userMedia(){
              console.log('chaning media.');
              this.user.isMusic = (this.user.isMusic) ? false : true;
          }
      }
  }
