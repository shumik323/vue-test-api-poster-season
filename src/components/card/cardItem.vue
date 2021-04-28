<template>
    <router-link
        class="card"
        :to="`episodes/${series.trim().toLowerCase().replace(/\s/g, '')}/${episode}`"
    >
    <div >
        <img :src="img" :alt="name">
        <div class="wrapper-intro">
            <h3>{{'Title: ' + title}}</h3>
            <p>{{episode + ' episode'}}</p>
            <p class="date">{{'Date: ' + date}}</p>
        </div>
        <span>Characters :</span>
        <ul>
        <li
        v-for="(name, index) in heroes"
        :key="name + index"
        >
            {{name}}
        </li>
        </ul>
    </div>
    </router-link>
</template>

<script>
    export default {
        name: "cardItem",
        props:{
            title: {
                type: String,
                default: '',
            },
            heroes: {
                type: Array
            },
            date: {
                type: String
            },
            series: {
                type: String
            },
            episode: {
              type: String
            },
            img: {
                type: String
            },
            name: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper-intro {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        & p {
            margin: 4px 0;
        }
        & h3 {
            padding: 0 10px;
            margin: 4px 0;
        }

    }
    li {
        text-align: left;
        list-style-type: none;
        cursor: pointer;
        transition: 0.1s ease-in;
        font-size: 12px;

        &:hover {
            color: #2699FB;
            transition: 0.1s ease-in;
        }
    }
    ul {
        margin: 0;
        text-align: left;
        padding: 0 10px;
    }
    .date {
        color: #2699FB;
        font-weight: 600;
        padding: 0 10px;
    }
    p {
        font-weight: 600;
        padding: 0 10px;
    }
    span {
        padding: 0 10px;
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
        color: #2699FB;
        font-weight: bold;
    }
    .card {
        text-decoration: none;
        color: #000000;
        margin:20px 10px;
        width: 280px;
        min-height: 290px;
        height: auto;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 8px 0.1px ;
        opacity: 0.8;
        cursor: pointer;
        transition: 0.3s ease-in;

        &:hover {
            opacity: 1;
            transition: 0.3s ease-in;
            box-shadow: 0 0 10px 0.5px ;
         }

        & img {
            border-radius: 10px 10px 0 0;
            width: 280px;
            object-fit: contain;
        }
    }

</style>
