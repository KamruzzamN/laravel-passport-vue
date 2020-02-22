<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        created(){
            this.$store.dispatch('destroyToken')
            .then((response) => {
                 this.$router.push({name:'login'});
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>