<template lang="">
    <div>
          <aside class="main-sidebar elevation-4 sidebar-dark-teal">
                <LogoComponent />
                <div class="sidebar">
                   <Profile />
                     <Menu />
                </div>
          </aside>
    </div>
</template>
<script>
import LogoComponent from '../components/LogoComponent.vue';
import Profile from '../components/Profile.vue';
import Menu from '../components/Menu.vue';

export default {
    name:'SideBarComponent',
    components:{
        LogoComponent,
        Profile,
        Menu
    }
}
</script>
<style lang="">
    
</style>