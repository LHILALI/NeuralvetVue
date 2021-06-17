<template lang="">
  <div>

    <NavbarComponent />
    <SideBarComponent />
    <SectionComponent />
    <FooterComponent />
  </div>
</template>
<script>

import SideBarComponent from './mastercomponents/SideBarComponent.vue'
import NavbarComponent from './mastercomponents/NavbarComponent.vue'
import FooterComponent from './mastercomponents/FooterComponent.vue'
import SectionComponent from './mastercomponents/SectionComponent.vue'

export default {
  data () {
    return {
                currentUser: {},
                token: localStorage.getItem('token')
    }
  },
  components: {
    SideBarComponent,
    NavbarComponent,
    FooterComponent,
    SectionComponent
  },
   mounted() {
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            axios.get('api/user').then((response) => {
                this.currentUser = response.data
            }).catch((errors) => {
                console.log(errors)
            })
        }
  }

</script>
<style lang="css" >


.router-link-active ,.router-link-exact-active {
    background: rgb(0, 0, 0) !important;
    color: rgb(18, 224, 139) !important;
}

</style>
