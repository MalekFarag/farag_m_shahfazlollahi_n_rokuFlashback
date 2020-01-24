
window.onload = function(){
    // Vue for topNav
    var vm = new Vue({
        el: '#topNav',

        data:{
            user:{
                isMusic: true
            },
        
        methods:{
            userMedia(){
                console.log('chaning media.');
                this.user.isMusic = (this.user.isMusic) ? false : true;
            }
        }
    }
    });
}

