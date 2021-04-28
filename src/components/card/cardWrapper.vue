<template>
    <div class="wrapper">
        <h2>{{name + ' '}}{{' ' + rating}}</h2>
        <span>{{plot}}</span>
        <div class="wrapper-content">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardWrapper",
        props: {
            name: {
                type: String
            },
            plot: {
                type: String
            },
            rating: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper-content {
        margin: 0 auto;
        width: 100%;
        max-width: 1500px;
        padding: 20px;
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

</style>
