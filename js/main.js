 //vue router
        //importing pages from components
        import homePage from './components/homePage.js';
        import appPage from './components/appPage.js';
        import searchPage from './components/searchPage.js';
        import libraryPage from './components/libraryPage.js';
        import settingsPage from './components/settingsPage.js';
        import errorPage from './components/errorPage.js';

    const router = new VueRouter({
        routes: [
        { path: '/', name: 'home', component: homePage },
        { path: '/app', name: 'app', component: appPage },
        { path: '/search', name: 'search', component: searchPage },
        { path: '/library', name: 'library', component: libraryPage},
        { path: '/settings', name: 'settings', component: settingsPage},
        { path: '/*', name: 'error', component: errorPage}
      ]
      })

    // Vue for app
    var vm = new Vue({
        created: function() {
            console.log('app is up an running');
        },

        router
    }).$mount("#app");