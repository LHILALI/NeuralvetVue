
<template lang="">
    <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12 text-center">
            <h4>
             Vue Generale 
            </h4>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
        <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
              
                          <utilisateurcomponent />

          </div>
          <div class="col-lg-6">
                          <notificationscomponent />
          </div>
        
        </div>
        <div class="row">
          <div class="col-lg-6">
            <chatcomponent />
          </div>
          <div class="col-lg-6">
          <maladiescomponent />
          </div>
          </div>
            <div class="row">
            <donneescomponent />
          </div>
      </div>
    </div>
    
</template>
<script>
import utilisateurcomponent from './components/utilisateurcomponent';
import notificationscomponent from './components/notificationscomponent';
import chatcomponent from './components/chatcomponent';
import maladiescomponent from './components/maladiescomponent';
import donneescomponent from './components/donneescomponent';

import axios from 'axios';
import {onErrorCaptured, ref } from 'vue';

export default {    


  name:'vuegenerale',
  components: {
    utilisateurcomponent,
    notificationscomponent,
    chatcomponent,
    maladiescomponent,
    donneescomponent
  },

  setup() {
    const errMsg = ref(null);
   
    onErrorCaptured(() => {
      errMsg.value = "Error";
    })

    return {
      errMsg
    };
  },
  

}


</script>
<style >
    .skeleton{
      margin: 0 20px 30px 0px 
    }
</style>