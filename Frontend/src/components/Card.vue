<script setup>
const props = defineProps({
  podcast: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div id="cardsAlign">
    <v-card class="mx-auto" max-width="200">
      <v-img
        class="align-end-text-white"
        height="200"
        :src="podcast['im:image'][2].label"
        cover
      >
      </v-img>
      <v-card-subtitle class="pt-4">
        {{ podcast["title"].label }}
      </v-card-subtitle>
      <v-card-text>
        <div>Artist:</div>
      </v-card-text>
    </v-card>
  </div>
</template>
<style>
#CardsAlign {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.align-end-text-white {
  border-radius: 50%;
}
</style>