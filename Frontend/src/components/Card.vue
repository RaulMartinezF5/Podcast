<script setup>
const props = defineProps({
  podcast: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <v-card
      class="mx-auto"
      max-width="250"
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src="podcast['im:image'][2].label"
        cover
      >
      </v-img>
  
      <v-card-subtitle class="pt-4">
        {{podcast['title'].label  }}
      </v-card-subtitle>
  
      <v-card-text>
        <div></div>
  
        <div></div>
      </v-card-text>
  
    </v-card>
  </template>