<template lang="">
    <div>
      <form>
        <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">Compose New Message</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="form-group">
                  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                  </multiselect>               
                  </div>
                <div class="form-group">
                  <input class="form-control" v-model="subject" placeholder="Subject:">
                </div>
                <vue-editor v-model="content" />
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <div class="float-right">
                  <button type="submit" @click.prevent="sendMessage()" class="btn btn-primary"><i class="far fa-envelope"></i> Send</button>
                </div>
              </div>
              <!-- /.card-footer -->
            </div>
            </form>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'

export default {
  methods: {
    sendMessage(){
        const message = [];
        message.push(this.userData.id);
        message.push(this.value);
        message.push(this.subject);
        message.push(this.content);
        

        axios.post('/api/sendmessage', message).then((result) => {
          this.content = "";
          this.value = null;
          this.subject = "";
          Vue.swal({
                toast: true,
                icon:'success',
                title: 'Message envoye !',
                showConfirmButton: false,
                timer: 3000
              })

        }).catch((err) => {
          
        });
    }
  },
    components: { Multiselect },
  data () {
    return {
            token: localStorage.getItem('token'),
            value: [],
            content:'',
            options: [],
            subject: '',
            userData:''
    }
  },
  mounted() {
          window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
             axios.get('/api/user').then((response) => {
                 this.userData = response.data
            }).then((messages) =>
            {
              axios.get('/api/getusers/').then((users) => {
                this.options = users.data;
              }).catch((err) => {
                
              });
            })
  },
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="">
    
</style>