<template :key="this.$route.params.slug" >
    <div class="heroes" v-if="loaded">
            <div class="content" v-if="heroe.length > 0">

                <img :src="heroe[0].img" :alt="heroe.name">

                <div class="info-intro">
                    <p>Name: {{heroe[0].name}}</p>

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
                    <p>Status: {{heroe[0].status}}</p>


                    <span>Appearance:
                    <ul>
                        <li v-for="(occupation, index) in heroe[0].appearance"
                            :key="occupation[index]"
                        >
                            {{occupation + ' season'}}
                        </li>
                    </ul>
                    </span>
                </div>


            </div>

            <h2 v-if="heroe.length === 0">Данных по данному персонажу на API нет !</h2>
        </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "HeroesDetail",
        props:['date'],
        async created() {
            const item = localStorage.getItem('heroes').split(' ').join('+').trim();
            this.fetchHeroes(item)
        },
        mounted() {
          localStorage.clear()
        },
        computed: {
            ...mapGetters('heroes', ['heroes', 'loaded']),
            heroe() {
              return this.heroes
            },
        },
        methods: {
            ...mapActions('heroes', ['fetchHeroes']),
        },
        watch: {
            // '$route.params.slug': {
            //     immediate: true,
            //     handler() {
            //         this.load = false;
            //         setTimeout(() => {
            //             this.fetchHeroes(localStorage.getItem('heroes').split(' ').join('+').trim())
            //         }, 0)
            //     },
            // },
        }
    }
</script>

<style scoped lang="scss">
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
