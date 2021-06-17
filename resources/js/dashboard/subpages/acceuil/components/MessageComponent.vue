<template lang="">
    <div>
        <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title">Read Mail</h3>

              <div class="card-tools">
                <a href="#" class="btn btn-tool" data-toggle="tooltip" title="Previous"><i class="fas fa-chevron-left"></i></a>
                <a href="#" class="btn btn-tool" data-toggle="tooltip" title="Next"><i class="fas fa-chevron-right"></i></a>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body p-0">
              <div class="mailbox-read-info">
                <h5>{{messageData.sujet}}</h5>
                <h6>From: {{messageData.sender}}
                  <span class="mailbox-read-time float-right">{{messageData.date}}</span></h6>
              </div>
              <!-- /.mailbox-read-info -->
              <div class="mailbox-controls with-border text-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Delete">
                    <i class="far fa-trash-alt"></i></button>
                  <button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Reply">
                    <i class="fas fa-reply"></i></button>
                  <button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Forward">
                    <i class="fas fa-share"></i></button>
                </div>
                <!-- /.btn-group -->
                <button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="Print">
                  <i class="fas fa-print"></i></button>
              </div>
              <!-- /.mailbox-controls -->
              <div class="mailbox-read-message">
                <p>Hello {{messageData.receiver}},</p>

                <div class="message-content">


                </div>

                <p>Thanks,<br>{{messageData.sender}}</p>
              </div>
              <!-- /.mailbox-read-message -->
            </div>
            <!-- /.card-body -->
            <div class="card-footer bg-white">
              
            </div>
            <!-- /.card-footer -->
            <div class="card-footer">
              <div class="float-right">
                <button type="button" class="btn btn-default"><i class="fas fa-reply"></i> Reply</button>
              </div>
              <button type="button" class="btn btn-default"><i class="far fa-trash-alt"></i> Delete</button>
              <button type="button" class="btn btn-default"><i class="fas fa-print"></i> Print</button>
            </div>
            <!-- /.card-footer -->
          </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
            token: localStorage.getItem('token'),
            messageData:'',
            userName:'',
    }
  },
  created() {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
             axios.get('/api/user').then((response) => {
                 this.userName = response.data.name
            }).then((messages) =>
            {
              axios.get('/api/getmessage/' + this.$route.params.id).then((message) => {
                if(this.userName == message.data[0].sender || this.userName == message.data[0].receiver){
                                  this.messageData = message.data[0];
                                  document.querySelector('.message-content').innerHTML=this.messageData.message
                }else{
                  
                }
              }).catch((err) => {
                
              });
            })
  },
  

  }
  
</script>
<style lang="">
    
</style>