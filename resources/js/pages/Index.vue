<template>
    <div class="container">
        <Navbar/>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Header'
    export default {
        components:{
            Navbar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
