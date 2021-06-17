<template lang="">

    <div>
<body class="login-page" style="min-height: 496.391px;">
<div class="login-box">
  <div class="login-logo">
    <img src="../../img/logo.png" width="200" />
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Connexion</p>

      <form action="" method="post">
        <div class="input-group mb-3">
          <input type="email" v-model="formData.email" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" v-model="formData.password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
         
          <!-- /.col -->
          <div class="col-12">
            <button @click.prevent="login()" type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>


    </div>
    <!-- /.login-card-body -->
  </div>
</div>


</body>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
  created () {
  },
        name:'Login',
          data(){
            return {
                formData: {
                    email: '',
                    password: '',
                    device_name: 'browser'
                },
                errors: {}
            }
        },
            methods: {
                login(){
                    axios.post('/api/login', this.formData).then((response) => {
                        localStorage.setItem('token', response.data)
                        this.$router.push('acceuil/vuegenerale')
                        
                    }).then(() => {
                              axios.get('/api/user').then((result) => {
                                                        Vue.swal({
                                                        toast: true,
                                                        icon:'success',
                                                        title: 'Bienvenue ' + result.data.name +'!',
                                                        showConfirmButton: false,
                                                        timer: 3000
                                                      })
                                                      })
                                                      
                    }).catch((errors) => {
                       Vue.swal({
                         toast: true,
                          icon:'error',
                          title: 'Un de vos identifiants est incorrect',
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 2000,
                          backdrop: 'none'
                        })
                    })
                }
            }

        }



        
</script>
<style lang="css" scoped>

    .inputerror {
            color:red
    }
</style>