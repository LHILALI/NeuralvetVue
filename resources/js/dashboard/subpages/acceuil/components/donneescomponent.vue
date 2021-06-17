<template lang="">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Progress bars</h3>
                <div class="card-tools">
                       <form class="form-inline">

                      <div class="form-group mx-4">
                        <label>Select</label>
                        <select class="form-control mx-2">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>

                      <div class="form-group mx-4">
                        <label>Select</label>
                        <select class="form-control mx-2">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>
                    </form>
                </div>
              </div>
              
              <!-- /.card-header -->
              <div class="card-body">
                <div class="progress mb-3">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                    <span class="sr-only">40% Complete (success)</span>
                  </div>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                    <span class="sr-only">20% Complete</span>
                  </div>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                    <span class="sr-only">60% Complete (warning)</span>
                  </div>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                    <span class="sr-only">80% Complete</span>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
</template>
<script>
export default {
    name:'donnesscomponent'
}
</script>
<style lang="">
    
</style>