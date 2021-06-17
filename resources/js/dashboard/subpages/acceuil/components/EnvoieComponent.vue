<template lang="">
    <div>
        <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title">Inbox </h3>

              <div class="card-tools">
                <div class="input-group input-group-sm">
                  <input type="text" class="form-control" placeholder="Search Mail">
                  <div class="input-group-append">
                    <div class="btn btn-primary">
                      <i class="fas fa-search"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-tools -->
            </div>
            <!-- /.card-header -->
            <div class="card-body p-0">
              <div class="mailbox-controls">
                <!-- Check all button -->
                <button type="button" class="btn btn-default btn-sm checkbox-toggle"><i class="far fa-square"></i>
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-sm">
                    <i class="far fa-trash-alt"></i>
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    <i class="fas fa-reply"></i>
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    <i class="fas fa-share"></i>
                  </button>
                </div>
                <!-- /.btn-group -->
                <button type="button" class="btn btn-default btn-sm">
                  <i class="fas fa-sync-alt"></i>
                </button>
                <div class="float-right">
                  1-50/200
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-sm">
                      <i class="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" class="btn btn-default btn-sm">
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>
                  <!-- /.btn-group -->
                </div>
                <!-- /.float-right -->
              </div>
              <div class="table-responsive mailbox-messages">
                <table class="table table-hover table-striped">

                  <tbody v-if="emailsSent.length != 0">
                  <tr v-for="email in emailsSent" :key="email.id">
                    <td>
                      <div class="icheck-primary">
                        <input type="checkbox" value="" :id="'check1'+email.id">
                        <label :for="'check1'+email.id"></label>
                      </div>
                    </td>
                    <td class="mailbox-star">
                      <i v-if="email.isRead" class="fa fa-envelope-open" aria-hidden="true"></i>
                      <i v-else  class="fa fa-envelope text-primary" aria-hidden="true"></i>
                    </td>
                    <td class="mailbox-name">
                      {{ email.receiver }}
                    </td>
                    <td v-if="email.isRead" @click.prevent="readMessage(email.id)" class="mailbox-subject">
                      <a style="color:black" class="text-dark" href="#">{{ email.sujet }}</a>
                    </td>
                      <td v-else @click.prevent="readMessage(email.id)" class="mailbox-subject">
                      <a style="font-weight: bold;" class="text-primary"  href="#">{{ email.sujet }}</a>
                    </td>
                    <td class="mailbox-attachment"></td>
                    <td class="mailbox-date">5 mins ago</td>
                  </tr>
                  </tbody>
                  <tbody v-else class="emptymail">
                     <i class="fas fa-envelope-open"></i>
                    <br>
                    <h2>
                      Vide !
                    </h2>
                  </tbody>
                </table>
                <!-- /.table -->
              </div>
              <!-- /.mail-box-messages -->
            </div>
            <!-- /.card-body -->
            <div class="card-footer p-0">
              <div class="mailbox-controls">
                <!-- Check all button -->
                <button type="button" class="btn btn-default btn-sm checkbox-toggle">
                  <i class="far fa-square"></i>
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-sm">
                    <i class="far fa-trash-alt"></i>
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    <i class="fas fa-reply"></i>
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    <i class="fas fa-share"></i>
                  </button>
                </div>
                <!-- /.btn-group -->
                <button type="button" class="btn btn-default btn-sm">
                  <i class="fas fa-sync-alt"></i>
                </button>
                <div class="float-right">
                  1-50/200
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-sm">
                      <i class="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" class="btn btn-default btn-sm">
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>
                  <!-- /.btn-group -->
                </div>
                <!-- /.float-right -->
              </div>
            </div>
          </div>
          <!-- /.card -->
    </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
            userData: {},
            token: localStorage.getItem('token'),
            emailsSent:''
    }
  },
  mounted() {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
             axios.get('/api/user').then((response) => {
                 this.userData = response.data
            }).then((messages) =>
            {
              axios.get('/api/getsentmessages/' + this.userData.id).then((messages) => {
                this.emailsSent = messages.data;
              }).catch((err) => {
                
              });
            })
  },
  

  }
</script>
<style lang="">
    
</style>