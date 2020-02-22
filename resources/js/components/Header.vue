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

                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                        </li>

                        <li class="nav-item" v-if="!loggedIn">
                            <router-link class="nav-link" :to="{name:'login'}">Login</router-link>
                        </li>

                        <li class="nav-item" v-if="!loggedIn">
                            <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
                        </li>
                        <li class="nav-item" v-if="loggedIn">
                            <router-link class="nav-link" :to="{name: 'logout'}">Logout</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>