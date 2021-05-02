<template>
    <div class="occupation" v-if="loadedHeroes">
        <h2>Breaking Bad Occupation</h2>
        <ul v-if="occupations.length > 0">
            <li
                    v-for="occupation in occupationsHeroes"
                    :key="occupation.title"
            >
                {{occupation.title + ' :'}}
                <h5>Name:
                    <a @click="localeHeroes(occupation.characters)" @mouseover="mouseOver(occupation.characters)">
                        <router-link :to="'/heroes/' + occupation.characters.trim().toLowerCase().replace(/\s/g, '')">
                            {{occupation.characters}}
                        </router-link>
                    </a>
                </h5>

            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {

        async created() {
            // localStorage.clear()
            await Promise.allSettled([
                this.allHeroes().then(() => {
                    this.occupationList
                })
            ]);
        },
        data() {
            return {
                occupations: [],
                occupationsHeroes: [],
            }
        },
        computed: {
            ...mapGetters('heroes', ['loadedHeroes', 'heroesAll']),
            occupationList() {
                return this.heroesAll.map((t) => {
                    if (t.category === 'Breaking Bad') {
                        t.occupation.forEach((n) => {
                            if (!this.occupations.includes(n.trim().toLowerCase())) {
                                this.occupations.push(n.trim().toLowerCase())
                                this.occupationsHeroes.push({title: n.trim().toLowerCase(), characters: t.name})
                            }
                        })
                    }
                })
            },
            heroesList() {
              return this.heroesAll
            },
            // occupationsHeroesList() {
            //     return this.heroesAll.map((t) => {
            //         return t.occupation.map((n) => {
            //             if (this.occupations.includes(n.trim().toLowerCase())) {
            //                 console.log(n.length)
            //                 return n
            //             }
            //         })
            //     })
            // },
        },
        mounted() {

            // this.occupations.reduce((unique, item) => {
            //     return unique.includes(item) ? unique : [...unique, item]
            // })
        },
        methods: {
            ...mapActions('heroes', ['allHeroes']),
            mouseOver(name) {
                this.localeHeroes(name)
            },
            localeHeroes(name) {
                localStorage.setItem('heroes', name.split(' ').join('+').trim());
            }
        },
    }
</script>

<style scoped lang="scss">
    .occupation {
        ul {
            width: 100%;
            & li {
                text-align: left;
                text-transform: capitalize;
                list-style-type: decimal;
                font-weight: 500;
                font-size: 20px;
            }
        }
    }

</style>
