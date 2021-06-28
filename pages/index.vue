<template>
  <v-row justify="center" align="center">
    <v-col v-if="$qAuth.loggedIn" cols="12">
      <v-card rounded="xl">
        <v-card-title>Authenticated user</v-card-title>
        <v-card-text>

        <v-list dense>
          <v-list-item link v-for="(value, key, index) in $qAuth.user" :key="index">
            <span class="mx-1">{{key}}</span>
            <span class="mx-1">{{value}}</span>
          </v-list-item>
        </v-list>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-else cols="12">
      <v-alert  type="warning" outlined border="left" prominent >
        <v-row align="center">
        <v-col class="grow">
          You have not authenticated
          </v-col>
        <v-col class="shrink" >
          <v-btn :to="{name: 'login'}" color="warning">Login</v-btn>
        </v-col>
      </v-row>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>

export default {
 
}
</script>
