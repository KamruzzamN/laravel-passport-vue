<template>
    <div class="home">
        <div class="container">
            <Navbar/>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>Welcome <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#modal-default">Add User <i class="fa fa-user-plus"></i></button></h3>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th class="text-center">Action</th>
                                </tr>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.created_at}}</td>
                                    <td class="text-center">
                                        <div class="btn-group">
                                            <router-link class="btn btn-warning" :to="`/profile/${user.id}/edit/`">
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <span class="btn btn-danger" v-on:click="deleteUser(user.id)">
                                                <i class="fa fa-trash"></i>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
    </div>
    
</template>

<script>
    import Navbar from '../components/Header'
    export default {
        name: "Users",
        data(){
            return {
                
            }
        },
        components:{
            Navbar
        },

        mounted(){
            this.$store.dispatch('loadUsers');
        },
        computed:{
            users(){
                return this.$store.getters.users
            }
        },
        methods:{

        }
    }
</script>