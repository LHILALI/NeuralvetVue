<template lang="">
    <div>
        <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Enquetes</h3>
                <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <pie-chart :data="[['Achevée', 44], ['Active', 23],['Inactive', 10]]" :colors="['#29bf00', '#3b90ff','#ff3b3b']"></pie-chart> 
              </div>
              </div>
              
              <!-- /.card-body -->
            </div>
    </div>
</template>
<script>

export default {
  name:'chatcomponent',
  components:{
    
  }
}
</script>
<style lang="css">
 
</style>