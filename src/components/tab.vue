<template>
    <div id="dynamic" class="demo">
        <ul class="nav">
            <li
                    v-for="(item, i) in season"
                    :key="item[i]"
                    @click="[currentTab = item, countContentEmit(item)]">
                <button
                        class="btn_nav"
                        :class="{active: item === currentTab}"
                >
                    {{item}} season
                </button>
            </li>
        </ul>

        <slot name="contentTab" />

    </div>
</template>

<script>
    export default {
        name: "tab",
        props: {
            season: {
                type: Array,
                required: true,
                validator: (prop) => ['object', 'number', 'string', 'undefined'].includes(typeof prop),
            }
        },
        data() {
            return {
                currentTab: '0',
            }
        },
        mounted() {
          this.currentTab = '1'
          this.countContentEmit(this.currentTab);
        },
        methods: {
            countContentEmit(item) {
                // if (this.$route.name !== `season${item}`) {
                //     this.$router.push({path: `${item}`})
                // }
                this.$root.$emit('countContentEmit', item);
            },
        },
        watch: {
            currentTab(newValue) {
               this.currentTab = newValue;
               this.countContentEmit(newValue);
            }
        }
    }
</script>

<style scoped lang="scss">
    .demo {
        position: relative;

        @media (max-width: 575px) {
            white-space: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
        }


        & .nav {
            width: 100%;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            & li {
                margin: 15px;
                position: relative;

                @media (max-width: 575px) {
                    margin: 5px;
                }

                & .btn_nav{
                    display: block;
                    background-color: transparent;
                    border: none;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: bold;
                    color: #989898;
                    cursor: pointer;
                    position: relative;


                    &:hover {
                        color: #2699FB;
                    }
                }

                & .active {
                    color: #2699FB;
                    position: relative;
                    &:after {
                        display: block;
                        position: absolute;
                        left: 0;
                        width: 100%;
                        height: 3px;
                        margin: 11px 0;
                        background-color: #2699FB;
                        content: "";
                        transition: width 0.5s ease-out;
                    }


                }

                &:after{
                    display: block;
                    position: absolute;
                    left: 0;
                    width: 0;
                    height: 3px;
                    margin: 10px 0;
                    background-color: #2699FB;
                    content: "";
                    transition: width 0.5s ease-out;
                }

                &:hover:after{
                    opacity: 1;
                    z-index: 10;
                    width: 100%;
                    transition: width 0.5s ease-out;

                }
                &:hover {
                    opacity: 1;
                    z-index: 10;
                }

            }
        }
    }
    li {
        list-style-type: none;
    }
    ul {
        margin-left: 0;
        padding-left: 0;
    }
</style>
