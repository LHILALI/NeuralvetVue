<template lang="">
    <div>

            <div class="card">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Coordonnees</h3>
                  <a href="#" type="pass"  @click.prevent="changePassword()">Modifier Mot de Passe</a>
                </div>
              </div>
              <div class="card-body">
               <table class="table table-striped table-valign-middle">
                  <tbody>
                  <tr>
                    <td>
                     Nom et Prenom
                    </td>
                    <td>
                          {{userData.name}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     Role
                    </td>
                    <td>
                        *****
                    </td>
                  </tr>
                  <tr>
                    <td>
                     Email Addresse
                    </td>
                    <td>
                        {{userData.email}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     GSM
                    </td>
                    <td>
                          {{userData.gsm}}
                    </td>
                  </tr>
           
                  </tbody>
                </table>
              </div>
            </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      formData:{
        newpass:'',
      }
    }
  },
  methods: {
    changePassword(){
      Vue.swal({
          title: 'Changer votre mot de passe',
          input: 'password',
          showCancelButton: true,
          confirmButtonText: 'Changer',
          cancelButtonText: 'Annuler',
          showLoaderOnConfirm: true,
          preConfirm: (newPass) => {
            this.formData.newpass = newPass;
            axios.put('/api/changepassword/' + this.userData.id, this.formData).then((result) => {
            }).catch((err) => {
              console.log(err)
            });
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {
            Vue.swal({
              title: `${result.value.login}'s avatar`,
              imageUrl: result.value.avatar_url
            })
          }
})

    }
  },
  props:['userData'],
    name:'CoordonneesComponent',
}
</script>
<style lang="">
    
</style>