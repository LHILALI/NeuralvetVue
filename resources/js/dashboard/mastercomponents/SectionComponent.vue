<template lang="">
    <div>
              <div class="content-wrapper">
                    <div >
                    <section class="content" id="app">
                      <transition name="fade">

                            <router-view></router-view>
                              </transition>

                    </section>
                    </div>
                </div>
    </div>
</template>
<script>
    import AcceuilPage from '../pages/AcceuilPage.vue';
export default {
    name:'SectionComponent',
    components:{
        AcceuilPage
    }
}
</script>
<style >
     .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>