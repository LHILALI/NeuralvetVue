<template lang="">
    <div>
        <div class="card">
              <div class="card-header">
                <h3 class="card-title">Notifications</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input v-model="searchtext" type="text" class="form-control float-right" placeholder="Search">
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="notification in filtersearch" :key="notification.id">
                      <td>
                      <i v-if="notification.type == 3" class="fa fa-circle green-dot" aria-hidden="true"></i>
                      <i v-else-if="notification.type == 2" class="fa fa-circle orange-dot" aria-hidden="true"></i>
                      <i v-else="notification.type == 1" class="fa fa-circle red-dot" aria-hidden="true"></i>
                      </td>
                      <td>{{ notification.date }}</td>
                      <td>
                      <span class="tag tag-success" v-if="notification.type == 3">Normale</span>
                      <span class="tag tag-success" v-if="notification.type == 2">Important</span>
                      <span class="tag tag-success" v-if="notification.type == 1">Critique</span>
                      </td>
                      <td>{{notification.message}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
    </div>
</template>
<script>

import axios from 'axios';
import { ref } from 'vue';

export default {
  data () {
    return {
      searchtext:"",
      notifications:[]
    }
  },
  name:'notificationscomponent',
    mounted() {
      axios.get('http://localhost:3000/notification').then((result) => {
          this.notifications = result.data;
      }).catch((err) => {
        
      });
  },
  computed: {
    filtersearch() {
      return this.notifications.filter(notification => {
        return notification.message.toLowerCase().match(this.searchtext.toLowerCase());
      })
    }
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
    .orange-dot{
      color: orange !important;
    }
</style>