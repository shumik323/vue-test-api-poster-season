<template>
  <div v-if="loaded" class="home">


    <div class="dynamic-tabs">

    </div>


    <input
            v-model="filterEpisode"
            :placeholder="'search'"
            :disabled="!loaded"
    />


    <div
    v-for="item in filteredEpisodes"
    :key="item.episode_id"
    >

      {{item.title}}


    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

// const pick = (o, f) => {
//   const path = f.split('.');
//   if (path.length === 1) return o[f];
//   const p = path.shift();
//   return pick(o[p], path.join('.'));
// };


export default {
  name: 'Home',
  async created() {
    await this.fetchData()
  },
  data() {
    return {
      filterEpisode: '',
    }
  },
  computed: {
    ...mapGetters('episodes', ['episodes', 'loaded']),

    filteredEpisodes() {
      const filter = this.filterEpisode.trim().toLowerCase();
      if (!filter) return this.episodes;
      return this.episodes.filter(({ episode_id, title }) => (`${episode_id}`.includes(filter) || title.toLowerCase().includes(filter)));
    },


  },
  async mounted() {
    console.log(4)
    if (this.loaded) {
      console.log(7)
      this.filteredEpisodes.map((item) => {
        console.log(item)
      })
    }



  },
  methods: {
    ...mapActions('episodes', ['fetchData'])
  }
}
</script>
