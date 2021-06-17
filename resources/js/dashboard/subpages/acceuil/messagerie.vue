<template lang="">
   <div class="container-fluid">
   <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12 text-center">
            <h4>
             Messagerie 
            </h4>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
   <section class="content">
      <div class="row">
         <div class="col-md-3">
            <router-link :to="{'name': 'composemessage'}" class="btn btn-success btn-block mb-3">Compose</router-link>
            <div class="card">
               <div class="card-header">
                  <h3 class="card-title">Dossier</h3>
                  <div class="card-tools"><button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button></div>
               </div>
               <div class="card-body p-0">
                  <ul class="nav nav-pills flex-column">
                     <li class="nav-item active"><router-link :to="{'name': 'boitereception'}" class="nav-link"><i class="fas fa-inbox"></i> Boite de reception </router-link></li>
                     <li class="nav-item"><router-link :to="{'name': 'boiteenvoi'}" class="nav-link"><i class="far fa-envelope"></i> Boite d'envoi </router-link></li>
                  </ul>
               </div>
            </div>
         </div>
         <!-- /.col -->
         <div class="col-md-9">
                <transition name="fade" mode="out-in">
                            <router-view />
                </transition>
         </div>
      </div>
      <!-- /.row -->
   </section>
</div>
</template>
<script>

import RecuComponent from './components/RecuComponent.vue';
export default {
  data () {
    return {

    }
  },
    name:'messagerie',
    components:{
        RecuComponent,
    },
    mounted() {
       
    },
}
</script>
<style lang="">
    
</style>