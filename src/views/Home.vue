<template>
  <div v-if="loaded" class="home">

    <div class="dynamic-tabs">


      <tab
              v-if="countSeasons.bb"
              :season="countSeasons.bb"
      >
        <template
                v-if="content.bb && introSerial.Response"
                #contentTab>


          <card-wrapper
            :name="introSerial.Title"
            :plot="introSerial.Plot"
            :rating="introSerial.Ratings[0].Value"
          >

                  <card-item
                          v-for="(item, index) in content.bb"
                          :key="item.series + index"
                          :title="item.title"
                          :date="item.air_date"
                          :series="item.series"
                          :episode="item.episode"
                          :heroes="item.characters"
                          :img="introSerial.Poster"
                          :slug="item.episode_id"
                  >

                  </card-item>




          </card-wrapper>


        </template>
      </tab>



<!--      <tab-->
<!--              v-if="countSeasons.bcs"-->
<!--              :season="countSeasons.bcs"-->
<!--      >-->

<!--        <template-->
<!--                v-if="content.bcs && infoSerialBcs.Response"-->
<!--                #contentTab>-->

<!--          <card-wrapper-->
<!--                  :name="infoSerialBcs.Title"-->
<!--                  :plot="infoSerialBcs.Plot"-->
<!--                  :rating="infoSerialBcs.Ratings[0].Value"-->
<!--          >-->

<!--            <card-item-->
<!--                    v-for="(item, index) in content.bcs"-->
<!--                    :key="item.series + index"-->
<!--                    :title="item.title"-->
<!--                    :date="item.air_date"-->
<!--                    :series="item.series"-->
<!--                    :episode="item.episode"-->
<!--                    :heroes="item.characters"-->
<!--                    :img="infoSerialBcs.Poster"-->
<!--            >-->

<!--            </card-item>-->

<!--          </card-wrapper>-->


<!--        </template>-->

<!--      </tab>-->

    </div>


<!--    <input-->
<!--            v-model="filterEpisode"-->
<!--            :placeholder="'search'"-->
<!--            :disabled="!loaded"-->
<!--    />-->



  </div>
</template>

<script>

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
    // localStorage.clear()
    await Promise.allSettled([
       this.fetchData().then(() => {
        this.countSeason;
      }),
       this.fetchDataOmd(),
       this.fetchDataBcs()
    ]);
  },
  data() {
    return {
      filterEpisode: '',
      countSeasons: {
        bcs: [],
        bb: [],
      }
      ,
      content: {
        bcs: [],
        bb: [],
      },

      path: this.$route.path,
    }
  },
  computed: {
    ...mapGetters('episodes', ['episodes', 'loaded']),
    ...mapGetters('omd', ['infoSerial', 'infoSerialBcs']),

    introSerial() {
      return this.infoSerial
    },

    introSerialBcs() {
      return this.infoSerialBcs
    },

    filteredEpisodes() {
      const filter = this.filterEpisode.trim().toLowerCase();
      if (!filter) return this.episodes;
      return this.episodes.filter(({ episode_id, title }) => (`${episode_id}`.includes(filter) || title.toLowerCase().includes(filter)));
    },
    filteredSeason() {
      const arrEpisodes = [...this.episodes]
      return arrEpisodes.sort((a, b) => {
         return a.season-b.season
      })
    },
    filteredEpisode() {
      return this.sortEpisode();
    },
    countSeason() {
      return this.filteredSeason.forEach((t) => {
        if (t.series.includes("Better Call Saul")) {
          if (!this.countSeasons.bcs.includes(t.season.trim().toLowerCase())) {
            return this.countSeasons.bcs.push(t.season.trim().toLowerCase())
          }
        } else {
          if (!this.countSeasons.bb.includes(t.season.trim().toLowerCase())) {
            return this.countSeasons.bb.push(t.season.trim().toLowerCase())
          }
        }

      })
    },
  },
  async mounted() {
    this.$root.$on('countContentEmit', (data) => {
        this.sortContent(data)
    })
  },
  methods: {
    ...mapActions('episodes', ['fetchData']),
    ...mapActions('omd', ['fetchDataOmd', 'fetchDataBcs']),

    sortContent(count) {
      this.content.bcs = [];
      this.content.bb = [];
      return this.filteredSeason.map((item) => {
        if (item.season === count) {
          if (item.series.includes("Better Call Saul")) {
            return this.content.bcs.push(item)
          } else {
            return this.content.bb.push(item)
          }
        }
      })
    },

    sortEpisode() {
      this.filteredSeason.sort((a, b) => {
        return a.episode-b.episode
      })
    }
  },

}
</script>
