<template>
    <div class="detail" v-if="loaded">

        <router-link to="/">Вернуться на главную</router-link>

        <div class="intro-serial">
            <h2>Информация о сериале:</h2>
            <img :src="introSerial.Poster" :alt="introSerial.Title">
            <p>{{introSerial.Title}}</p>
            <p>{{introSerial.Year}}</p>
            <p>{{introSerial.Released}}</p>
            <p>{{introSerial.Runtime}}</p>
            <p>{{introSerial.Genre}}</p>
            <p>{{introSerial.Writer}}</p>
            <p>{{introSerial.Plot}}</p>
        </div>

        <div class="intro-serial">
            <h2>Информация о епизоде:</h2>
            <p class="fwb">Title: {{infoEpisode[0].title}}</p>
            <p>Episode: {{infoEpisode[0].episode}}</p>
            <p>Season: {{infoEpisode[0].season}}</p>
        </div>

        <div class="content">
            <h2>Персонажи епизода:</h2>
            <ul>
                <li v-for="name in infoEpisode[0].characters"
                :key="name"
                >
                    <a @click="localeHeroes(name)"><router-link :to="'/heroes/' + name.trim().toLowerCase().replace(/\s/g, '')">{{name}}</router-link></a>

                </li>
            </ul>
        </div>


        <h2>Смерти епизода:</h2>

        <ul class="deatchSpisok">
            <li
                class="death"
                v-for="item in deathsEpisode"
                :key="item.death">
                <span>Death:</span> <a @click="localeHeroes(item.death)"><router-link :to="'/heroes/' + item.death.trim().toLowerCase().replace(/\s/g, '')"> {{item.death}} </router-link></a>
                <span>Cause:</span> {{item.cause}}
                <span>Responsible:</span> <a @click="localeHeroes(item.responsible)"><router-link :to="'/heroes/' + item.responsible.trim().toLowerCase().replace(/\s/g, '')">{{item.responsible}}</router-link></a>
                <span>Last words:</span> {{item.last_words}}
            </li>
        </ul>
            <h2 v-if="deathsEpisode.length === 0">Смертей в эпизоде нет !</h2>


    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "EpisdoesDetail",
        async created() {
            await Promise.allSettled([
                this.fetchDataEpisode(this.$route.params.id),
                this.fetchDeath(),
                this.fetchDataOmd()
            ]);
        },
        computed: {
            ...mapGetters('episode', ['infoSerials', 'loaded']),
            ...mapGetters('deaths', ['deaths']),
            ...mapGetters('omd', ['infoSerial']),
            introSerial() {
                return this.infoSerial
            },
            infoEpisode() {
                return this.infoSerials
            },
            deathsEpisode() {
                const episode = Number(this.infoEpisode[0].episode)
                const season = Number(this.infoEpisode[0].season)
                return this.deaths.map((item) => {
                    if ((Number(item.season) === season && Number(item.episode) === episode)) {
                            return item
                    }
                }).filter((el) => el != null)
            }
        },
        mounted() {
            localStorage.clear()
        },
        methods: {
            ...mapActions('episode', ['fetchDataEpisode']),
            ...mapActions('deaths', ['fetchDeath']),
            ...mapActions('omd', ['fetchDataOmd']),
            localeHeroes(name) {
                localStorage.setItem('heroes', name);
            }
        }
    }
</script>

<style scoped lang="scss">
    .death {
        border-radius: 10px;
        box-shadow: 0 0 10px 0.1px;
    }
    .deatchSpisok {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    }
    h2 {
        margin: 25px 0;
    }
    .fwb {
        font-weight: bold;
    }
    a {
        text-decoration: none;
        color: rgba(177, 0, 129, 0.92);
        transition: 0.1s ease-in;
        font-weight: 500;

        &:hover {
            color: #2699FB;
            transition: 0.1s ease-in;
        }
    }
    .intro-serial {
        font-size: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        & p {
            text-align: left;
            font-size: 20px;
            margin: 1px 0;
        }
    }
    ul {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        & li {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            margin: 3px;
            text-align: left;
            list-style-type: none;
            & span {
                margin: 10px 0;
                font-weight: bold;
                color: #2699FB;
            }
        }
    }

</style>
