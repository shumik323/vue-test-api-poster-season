<template>
    <div>
        <div class="wrapper-load" v-if="!this.load">
            <img src="../assets/llF5iyg.gif" alt="">
        </div>
        <div class="heroes" v-if="loaded && this.load">

            <div class="content" v-if="heroe.length > 0">

                <span class="favorite" @click="addFavorite(heroe[0])">
                    favorite
                    <img src="../assets/heart_icon-icons.com_54429.svg" alt="">
                </span>


                <img :src="heroe[0].img" :alt="heroe.name">

                <div class="info-intro">
                    <p>Name: {{heroe[0].name}}</p>
                    <p
                            v-if="heroe[0].birthday !== 'Unknown'">
                        Birthday: {{heroe[0].birthday.split('-').join('.')}}
                    </p>
                    <p
                            v-if="(heroe[0].birthday !== 'Unknown') && deathDate.length > 0">
                        Years of life: {{heroe[0].birthday.split('-').join('.')}} - {{deathDate[0].air_date.split('-').join('.')}}
                    </p>

                    <span>Occupation:
                    <ul>
                        <li v-for="(occupation, index) in heroe[0].occupation"
                            :key="occupation[index]"
                        >
                            {{occupation}}
                        </li>
                    </ul>
                    </span>

                    <p>Nickname: {{heroe[0].nickname}}</p>
                    <p>Status:
                        <span :class="statusClass">
                            {{heroe[0].status}}
                        </span>
                        <span
                                v-if="deathDate.length > 0"
                                class="death-date">
                            {{deathDate[0].air_date.split('-').join('.')}}
                        </span>
                    </p>


                    <span class="appearance">Appearance:
                    <ul>
                        <li v-for="(occupation, index) in heroe[0].appearance"
                            :key="occupation[index]"
                        >
                            {{occupation}}
                        </li>
                    </ul>
                    </span>
                </div>
            </div>


            <div class="time-line" v-if="timeLine.length > 0 && heroe.length !== 0">
                <h3>Time line:</h3>
                <ul v-for="time in timeLine" :key="time.title">
                    <li>
                        <span>{{time.season + ' season'}}</span>
                        <span>{{time.episode + ' episode'}}</span>
                        <span>{{time.title}}</span>
                        <span>{{time.air_date.split('-').join('.')}}</span>
                    </li>
                </ul>
            </div>

            <h2 v-if="heroe.length === 0">Данных по данному персонажу на API нет !</h2>

            <h2 v-if="(timeLine.length <= 0 || null || !timeLine) && heroe.length > 0 ">Данных по таймлайну на API нет !</h2>

        </div>
        <div class="quote" v-if="loadedQuote && heroe.length > 0">
            <h3>Quote</h3>
            <ul>
                <li
                v-for="qouteList in quote"
                :key="qouteList.quote_id"
                >
                    {{qouteList.quote}}
                </li>
                <li v-if="quote.length === 0">Цитат на API нет !</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "HeroesDetail",
        props:['date'],
        async created() {
            this.load = false;
            const name = localStorage.getItem('heroes');
            await Promise.allSettled([
                this.fetchHeroes(name),
                this.fetchData().then(() => {
                    this.countSeason;
                }),
                this.fetchDataQuote(name),
                this.fetchDeath()
            ]).then(() => {
                this.load = true;
            })
        },
        data() {
            return {
                load: false,
                countSeasons: {
                    bb: [],
                }
            }
        },
        computed: {
            ...mapGetters('heroes', ['heroes', 'loaded', 'keyHeroes']),
            ...mapGetters('quotes', ['quotes', 'loadedQuote']),
            ...mapGetters('episodes', ['episodes']),
            ...mapGetters('deaths', ['deaths']),
            heroe() {
              return this.heroes
            },
            quote() {
                return this.quotes
            },
            deathEpisode() {
              return this.deaths.map((t) => {
                  if (t.death === this.heroe[0].name) {
                      return t;
                  }
              }).filter((el) => el != null)
            },
            deathDate() {
                if (this.deathEpisode.length === 0) return [];

                const episode = this.deathEpisode[0].episode;
                const season = this.deathEpisode[0].season;
                const arrEpisodes = [...this.episodes]
                return arrEpisodes.sort((a, b) => {
                    return a.season-b.season
                }).map((t) => {
                    if (t.series.includes("Breaking Bad")) {
                        if ((t.season.includes(season)) && (t.episode.includes(episode))) {
                            return t;
                        }
                    }
                }).filter((el) => el != null)
            },
            statusClass() {
                if (this.heroe[0].status === 'Alive') {
                    return 'dot-alive'
                } else {
                    return 'dot-death'
                }
            },
            timeLine() {
                if (this.heroe.length === 0) return [];

                const name = this.heroe[0].name;
                const arrEpisodes = [...this.episodes]
                return arrEpisodes.sort((a, b) => {
                        return a.season-b.season
                    }).map((t) => {
                        if (t.series.includes("Breaking Bad")) {
                            if ((t.characters.includes(name))) {
                                return t;
                            }
                        }
                    }).filter((el) => el != null)


            }
/*            countSeason() {
                const arrEpisodes = [...this.episodes]

                return arrEpisodes.forEach((t) => {
                    if (t.series.includes("Breaking Bad")) {
                        console.log(t)
                    }
                })
            },*/
        },
        methods: {
            ...mapActions('heroes', ['fetchHeroes']),
            ...mapActions('quotes', ['fetchDataQuote']),
            ...mapActions('episodes', ['fetchData']),
            ...mapActions('deaths', ['fetchDeath']),
            ...mapActions('favorite', ['setStorageFavorite']),
            async addFavorite(item) {
                let arrFavorite = [];

                if (localStorage.getItem('favorite')) {
                    await arrFavorite.push(...JSON.parse(localStorage.getItem('favorite')))

                    if (!arrFavorite.map((t) => t.name).includes(item.name)) {
                        await arrFavorite.push(item);
                        await localStorage.setItem('favorite', JSON.stringify(arrFavorite));
                    }

                } else {
                    await arrFavorite.push(item)
                    await localStorage.setItem('favorite', JSON.stringify(arrFavorite));
                }

                // this.setStorageFavorite(item)
            },
        },
        watch: {
            // '$route.params.slug': {
            //     immediate: true,
            //     handler() {
            //         setTimeout(() => {
            //             this.fetchHeroes(localStorage.getItem('heroes'))
            //         }, 0)
            //     },
            // },
        }
    }
</script>

<style scoped lang="scss">
    .favorite {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #e32b31;
        font-size: 16px;
        margin:  0 20px 0 auto;
        font-weight: bold;
        text-transform: capitalize;
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s;
        & img {
            margin-left: 10px;
            width: 50px !important;
            height: 50px !important;
        }

        &:hover {
            opacity: 1;
            transition: 0.5s;
        }
    }
    ul {
        padding: 0;
    }
    .appearance {
        ul {
            display: flex;
            & li {
                margin-right: 10px;
            }
        }
    }
    .time-line {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        background-color: #f1f1f8;
        ul {
            width: 100%;
            display: flex;
            li {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                span {
                    margin-right: 55px;
                    text-align: left;
                    &:nth-child(3) {
                        text-align: left;
                        min-width: 250px;
                        width: auto;
                        display: inline-flex;
                    }
                }
            }
        }
    }
    .dot-alive {
        font-weight: bold;
        color: #42b983;
    }
    .dot-death {
        font-weight: bold;
        color: #b94246;
    }
    .death-date {
        font-weight: 500;
        color: #e32b31;
    }
    .wrapper-load {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        background-color: ghostwhite;
        color: #2699FB;
        & svg {
            width: 300px;
            height: 300px;
            background-color: red;
            z-index: 100;
        }
    }
    li {
        list-style-type: none;
        text-align: left;
    }
    .content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .info-intro {
            min-width: 400px;
            padding: 10px;
            text-align: left;
            margin: 25px 0 50px;
            box-shadow: 0 0 10px 0.1px;
            border-radius: 10px;
            & p {
                text-align: left;
                font-weight: bold;
                font-size: 20px;
            }
        }
        & img {
            height: 300px;
            width: 250px;
            object-fit: contain;
        }
    }

</style>
