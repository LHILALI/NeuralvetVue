<template lang="">
  
    <div>
        <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12 text-center">
            <h4>
             Mon Compte 
            </h4>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
        <div class="row">
          <div class="col-lg-6">
        <CoordonneesComponent :userData="userData" />
          </div>
        <div class="col-lg-6">
        <ActiviteComponent />
         </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
        <HistoriqueComponent />
          </div>
         </div>
        </div>
    </div>
</template>
<script>
import CoordonneesComponent from './components/CoordonneesComponent'
import HistoriqueComponent from './components/HistoriqueComponent'
import ActiviteComponent from './components/ActiviteComponent'
export default {
  data () {
    return {
                userData: {},
                token: localStorage.getItem('token')
    }
  },
    name:'moncompte',
    components:{
        CoordonneesComponent,
        ActiviteComponent,
        HistoriqueComponent
    },
    

     mounted() {
         window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
             axios.get('/api/user').then((response) => {
                 this.userData = response.data
            }).catch(() => {
            })
    },
}
</script>
<style lang="">
    
</style>