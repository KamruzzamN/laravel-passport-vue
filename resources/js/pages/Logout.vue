<template>
    <div>
        <spinner></spinner>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.$store.dispatch('destroyToken')
            this.$router.push('/login');
        }
    }
</script>

<style lang="scss" scoped>

</style>