<script setup>
import Header from '../components/Header.vue'
import Filter from '../components/Filter.vue'
import Card from '../components/Card.vue'
import axios from 'axios'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'

let podcasts = ref([])
const api = async () => {
  const response = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  return response.data.feed.entry
}
onBeforeMount(async () => {
  podcasts.value = await api()
  console.log(podcasts.value);
})
console.log(podcasts.value);
</script>

<template>

    <Header></Header>
    <Filter></Filter>
   
<section>
  <main>
  <ul>
    <div v-for="podcast of podcasts">
    <Card :podcast="podcast" />
  </div>
</ul>
</main>
</section>

</template>

<style scoped>

header {
 width: 100%;
 height: 20%;
}


ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
}


section {
  padding: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width:700px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width:500px) {
  h2 {
    margin-bottom: 30px;
  }

  ul {
    grid-template-columns: 1fr;
  }

  section {
    padding: 0;
  }
}
</style>
