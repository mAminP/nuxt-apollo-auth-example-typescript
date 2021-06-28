<template>
  <v-app dark>
    <v-app-bar
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer/>
      <v-btn rounded class="mx-2" color="grey" :to="{name: 'index'}">Home</v-btn>
      <v-btn rounded class="mx-2" color="grey" :to="{name: 'protected'}">Protected</v-btn>
      <v-btn rounded class="mx-2" color="grey" :to="{name: 'allowed'}">Allowed</v-btn>
      <v-btn rounded class="mx-2" color="grey " v-if="!$qAuth.loggedIn" :to="{name: 'login'}">Login</v-btn>
      <v-btn rounded class="mx-2" color="grey "  v-else @click.stop="logout">Logout</v-btn>
      <v-spacer />
      <v-badge
        bordered
        :color="$qAuth.loggedIn ? 'success' : 'error'"
        :icon="$qAuth.loggedIn ? 'mdi-lock-open' : 'mdi-lock'"
        class="mx-3"
        overlap
      >
       <v-chip label >loggedIn : {{$qAuth.loggedIn}}</v-chip>
      </v-badge>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods:{
    async logout(){
      await this.$qAuth.logout()
    }
  },
  data () {
    return {
      title: 'Nuxt Apollo Auth Example'
    }
  }
}
</script>
