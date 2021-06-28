<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card>
        <v-card-title>
          This page is protected. Only authenticated users can access it
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script >

export default  {
 middleware: ["qAuth"],
}
</script>

<style lang="scss">

</style>