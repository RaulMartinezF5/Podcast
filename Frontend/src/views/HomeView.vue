<script setup>
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import Filter from '../components/Filter.vue'
import axios from 'axios'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'

let podcasts = ref([ ])
const api = async () => {
  const response = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  return response.data.feed.entry
}
onBeforeMount(async()=>{podcasts.value = await api()
  console.log(podcasts.value);
})
console.log(podcasts.value);
</script>

<template>
  <div>
    <Header />
  </div>
  <div v-for="podcast of podcasts">
    <Card :podcast="podcast" />
  </div>
  <div>
    <Filter />
  </div>
</template>
