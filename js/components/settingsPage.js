export default{
    template:`
    <div class="content">
        <header>
        <h1>settings</h1>
        <img src='images/{{profile}}' alt='profile'>
        </header>
        <h3>Change accounts</h3>
            <ul class="signin">
                <router-link to="/app" class="account">Profile 1</router-link>
                <router-link to="/app" class="account">Profile 2</router-link>
                <router-link to="/app" class="account">Profile 3</router-link>
            </ul>
    </div>
    `
}