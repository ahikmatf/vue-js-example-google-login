<template>  
  <div class="container container-table">
    <!-- Errors -->
    <div v-if=response class="text-red"><p>{{response}}</p></div>

    <!-- login Button -->
    <a id="signin-button" v-on:click="signIn">
      <i class="fa fa-google-plus-official fa-3x"></i>
      Sign in with Google
    </a>
  </div>
</template>

<script>
/** -----------------------------------------------------------------------------------------------------------
  * You would first need to place these 3 lines of code in your APP ENTRY file, e.g. src/main.js
  * 
  * import GoogleAuth from 'vue-google-auth'
  * Vue.use(GoogleAuth, { client_id: 'xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com' })
  * Vue.googleAuth().load()
  * 
  * -----------------------------------------------------------------------------------------------------------
  */
import Vue from 'vue'

export default {
  name: 'Login',
  data: function (router) {
    return {
      section: 'Login',
      loading: '',
      response: ''
    }
  },
  methods: {
    signIn: function () {
      Vue.googleAuth().directAccess()
      Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
    },
    onSignInSuccess: function (authorizationCode) {
      this.toggleLoading()
      this.resetResponse()

      //kode
      console.log(authorizationCode)

    },
    onSignInError: function (error) {
      this.response = 'Failed to sign-in'
      console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}
</script>

<style>

/** 
 * ----------------------------------------------------
 *  Styling? It's time to show your designing skills!
 * ----------------------------------------------------
 */

</style>