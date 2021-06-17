<template lang="">
    <div>
        
        <div class="card">
              <div class="card-header border-0">
                <h3 class="card-title">Utilisateurs</h3>
                
              </div>
              <div class="card-body p-0">
                <table class="table table table-valign-middle">
                  <thead>
                  <tr>
                    <th >Status</th>
                    <th class="text-center"><i class="fa fa-user-circle" aria-hidden="true"></i><br>
                    <small>Total</small>
                    </th>
                    <th class="text-center"><i class="fa fa-circle green-dot"   aria-hidden="true"></i><br>
                    <small>Active</small>
                    </th>
                    <th class="text-center"><i class="fa fa-circle red-dot" aria-hidden="true"></i><br>
                    <small>Inactive</small>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                     <tr>
                    <td>
                      Administrateurs
                    </td>
                    <td class="text-center">{{ this.adminTotal }}</td>
                    <td class="text-center">
                      {{this.adminActif}}
                    </td>
                    <td class="text-center">
                     {{this.adminTotal - this.adminActif}}
                    </td>
                  </tr>
                     <tr>
                    <td>
                      Agents de terrain
                    </td>
                    <td class="text-center">{{this.agentTotal}}</td>
                    <td class="text-center">
                      {{this.agentActif}}
                    </td>
                    <td class="text-center">
                     {{this.agentTotal - this.agentActif}}
                    </td>
                  </tr>
                     <tr>
                    <td>
                      Analystes de données
                    </td>
                    <td class="text-center">{{this.analysteTotal}}</td>
                    <td class="text-center">
                      {{this.analysteActif}}
                    </td>
                    <td class="text-center">
                     {{this.analysteTotal - this.analysteActif}}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  data () {
    return {
      users:[],
      adminTotal:0,
      adminActif:0,
      analysteTotal:0,
      analysteActif:0,
      agentTotal:0,
      agentActif:0,

    }
  },
  methods: {
      calcRoles(users){
       let totalAdmin = this.adminTotal;
       let totalAgent = this.agentTotal;
       let totalAnalyst = this.analysteTotal;
       let totalAdminActif = this.adminActif;
       let totalAgentActif = this.agentActif;
       let totalAnalysteActif = this.analysteActif;


        users.forEach(function(user) {
          if(user.role == 1){
            totalAdmin++;
            if(user.isActive){
                totalAdminActif++;
            }
          }else if(user.role == 2){
            totalAgent++;
             if(user.isActive){
                totalAgentActif++;
            }
          }else{
            totalAnalyst++;
             if(user.isActive){
                totalAnalysteActif++;
            }
          }
      });

       this.adminTotal = totalAdmin;
       this.agentTotal = totalAgent;
       this.analysteTotal = totalAnalyst;

       this.adminActif = totalAdminActif;
       this.agentActif = totalAgentActif ;
       this.analysteActif = totalAnalysteActif;
      }
  },

  mounted() {
    axios.get('http://localhost:3000/users').then((result) => {
      this.calcRoles( result.data);
      console.log(result.data)
    }).catch((err) => {
    });
  },
}
</script>
<style lang="css">
    .green-dot{
      color: green !important;
    }
    .red-dot{
      color: red !important;
    }
</style>