
import AllUsersComponent from './components/AllUsersComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';
import SearchComponent from './components/SearchComponent.js';
import SettingsComponent from './components/SettingsComponent.js';

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "login" } },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: 'users', component: AllUsersComponent },
      { path: '/home', name: 'home', component: UserHomeComponent, props: true },
      { path: '/search', name: 'search', component: SearchComponent, props: true },
      { path: '/settings', name: 'settings', component: SettingsComponent, props: true }
    ]
  });

  const vm = new Vue({
    data: {
      authenticated: false,
      administrator: false,
      user: [],

      currentUser: {}
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      logout() {
        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;
      },
      changeUser(){
        this.$router.push({ path: "/users" });
      }
    },

    router: router
  }).$mount("#app");

  router.beforeEach((to, from, next) => {
    //console.log('router guard fired!', to, from, vm.authenticated);

    if (vm.authenticated == false) {
      next("/login");
    } else {
      next();
    }
  });
})();