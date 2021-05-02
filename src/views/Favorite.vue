<template>
    <div class="wrapper_favorite">
        <h1  v-if="favoriteList.length < 0">Избранных персонажей нет !</h1>

        <div class="favorite" v-if="favoriteList.length > 0">

            <div
            class="card-heroes"
            v-for="item in favoriteList"
            :key="item.name"
            >
                <img :src="item.img" :alt="item.name">
                <a @click="localeHeroes(item.name)" @mouseover="mouseOver(item.name)">
                    <router-link :to="'/heroes/' + item.name.trim().toLowerCase().replace(/\s/g, '')">
                        <p>{{item.name}}</p>
                    </router-link>
                </a>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Favorite",
        computed: {
            favoriteList() {
               return JSON.parse(localStorage.getItem('favorite'))
            }
        },
        methods: {
            mouseOver(name) {
                this.localeHeroes(name)
            },
            localeHeroes(name) {
                localStorage.setItem('heroes', name.split(' ').join('+').trim());
            }
        }

    }
</script>

<style scoped lang="scss">
    .card-heroes {
        width: 300px;
        height: 350px;
        box-shadow: 0 0 10px 0.5px;
        margin: 15px;
        z-index: 1;
        & img {
            z-index: 10;
            width: 100%;
            height: 90%;
            object-fit: cover;
        }
        & p {
            margin: 5px;
            font-weight: bold;

        }
    }
    .favorite {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .wrapper_favorite {

    }

</style>
