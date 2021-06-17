<template lang="">
    <div>
       <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link ">
              <i class="nav-icon fas fa-home menu-open"></i>
              <p>
                Acceuil
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="ml-2 nav nav-treeview" style="display: none;">
              <li class="nav-item">
                <router-link :to="{'name': 'vuegenerale'}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                  <p>Vue Generale</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{'name': 'moncompte'}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                  <p>Mon Compte</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{'name': 'messagerie'}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                  <p>Messages</p>
                </router-link>
              </li>
            </ul>
          </li>
           <li class="nav-item has-treeview">
            <a href="#" class="nav-link ">
              <i class="nav-icon fas fa-home menu-open"></i>
              <p>
                Donnees
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="ml-2 nav nav-treeview" style="display: none;">
              <li class="nav-item">
                <router-link :to="{'name': 'cartographie'}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                  <p>Cartographie</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{'name': 'environnement'}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                  <p>Environnement</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{'name': 'elevage'}" class="nav-link">
                  <i class="fas fa-dot-circle nav-icon"></i>
                  <p>Elevage</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
          <router-link to="/epid" class="nav-link">
              <i class="nav-icon fas fa-shield-virus"></i>
              <p>
                Epidemiologie
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/analyse" class="nav-link">
              <i class="nav-icon fas fa-chart-bar"></i>
              <p>
                Analyse
              </p>
            </router-link>
          </li>
          <li class="nav-item">
          <router-link to="/param" class="nav-link">
              <i class="nav-icon fas fa-cogs"></i>
              <p>
                Parametres
              </p>
            </router-link>
          </li>
          
          <li class="nav-item">
          <a @click="logout()"  to="/param" class="nav-link logout">
              <i class="nav-icon fas fa-lock-open"></i>
              <p>
                Déconnexion
              </p>
            </a>
          </li>
          
    </ul>
      </nav>
    </div>
</template>
<script>
const options = {
  confirmButtonColor: 'red',
};
export default {

  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  name: 'Menu',
    methods: {
      logout(){
               Vue.swal({
  title: 'Voulez-vous vraiment vous déconnecter?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Déconnecter'
}).then((result) => {
  if (result.isConfirmed) {
  axios.post('/api/logout').then((response) => {
                    localStorage.removeItem('token')
                    this.$router.push('/login')
                }).catch((errors) => {
                    console.log(errors)
                })
  }
})
            }
  },
 

}
</script>
<style lang="css" scooped>
.logout{
  cursor:pointer !important;
}
</style>
