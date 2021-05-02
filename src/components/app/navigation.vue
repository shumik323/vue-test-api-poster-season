<template>
    <div class="nav">
        <div class="wrapper_nav">
            <div class="logo">Breaking Bad</div>
            <ul>
                <router-link class="btn_nav" tag="li" exact active-class="active" to="/">Home</router-link>
                <router-link class="btn_nav" tag="li" active-class="active" to="/occupation">Occupation</router-link>
                <router-link class="btn_nav" tag="li" active-class="active" to="/favorite">Favorite</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #42b983;
        height: 50px;
        width: 100%;
        z-index: 1000;
        color: #000000;
        margin-bottom: 50px;

        & .wrapper_nav {
            font-weight: bold;
            cursor: pointer;
            max-width: 1500px;
            width: 100%;
            display: flex;
            align-items: center;
            margin: 0 auto;
        }
        & ul {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            & li {
                list-style-type: none;
                margin-right: 20px;
                transition: 0.3s ease-in;

                &:hover {
                    transition: 0.3s ease-in;
                    color: #2c3e50;
                }
            }

        }
    }
    .btn_nav{
        display: block;
        background-color: transparent;
        border: none;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        color: #000000;
        cursor: pointer;
        position: relative;

        &:hover {
            color: #2699FB;
        }
    }

    .active {
        color: #2699FB;
        position: relative;
        &:after {
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 3px;
            margin: 5px 0;
            background-color: #2699FB;
            content: "";
            transition: width 0.5s ease-out;
        }


    }

</style>
