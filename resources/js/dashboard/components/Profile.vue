<template lang="">
       <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          {{name}}
        </div>
      </div>
      
</template>
<script>
export default {
  data () {
    return {
      name:'',
            token: localStorage.getItem('token')
    }
  },
  name: 'Profile',
  mounted() {
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
       axios.get('/api/user').then((result) => {
         this.name = result.data.name;
       })
  },
}
</script>
<style>
  .info {
    color : white;
  }
</style>
