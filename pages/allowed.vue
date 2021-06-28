<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card>
        <v-card-title>
          This page is allowed for all
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script >

export default {
 middleware: ["qAuth"],
     qAuth:false
}
</script>
