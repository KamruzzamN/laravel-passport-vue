<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">Laravel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->

                        <li class="nav-item" v-if="loggedIn">
                            <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                        </li>

                        <li class="nav-item" v-if="loggedIn">
                            <router-link class="nav-link" :to="{name:'users'}">Users</router-link>
                        </li>

                        <li class="nav-item" v-if="!loggedIn">
                            <router-link class="nav-link" :to="{name:'login'}">Login</router-link>
                        </li>

                        <li class="nav-item" v-if="!loggedIn">
                            <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
                        </li>
                        
                        <li class="nav-item" v-if="loggedIn">
                            <router-link class="nav-link" :to="{name: 'home'}">{{user.name}}</router-link>
                        </li>

                        <li class="nav-item" v-if="loggedIn">
                            <a href="#" class="nav-link" @click="logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.$store.dispatch('user')
        },
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn
            },
            user(){
                return this.$store.getters.user
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('destroyToken')
                this.$router.push('/login');
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>