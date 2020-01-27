

    // creating template for rendering media (music + film)
    Vue.component('mediaContent',{
        template: `
            
        `
    })

    // Vue for app
    var vm = new Vue({
        el: '#app',

        data:{
            user:{
                isMusic: true
            },

            music:{
                years: ['50s', '60s', '70s', '80s', '90s'],
                genres: ['Rock', 'Pop', 'Folk', 'Hip-Hop', 'Metal']
            },

            film:{
                years: ['50s', '60s', '70s', '80s', '90s'],
                genres: ['Drama', 'Reality', 'Horror', 'Mystery', 'Sci-fi']
            }

        },

        methods:{
            userMedia(){
                console.log('chaning media.');
                this.user.isMusic = (this.user.isMusic) ? false : true;
            }
        }
    });

