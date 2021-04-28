<template>
    <div class="detail">

        <div class="intro-serial">
            {{introSerial.Title}}
            {{introSerial.Year}}
            {{introSerial.Released}}
            {{introSerial.Runtime}}
            {{introSerial.Genre}}
            {{introSerial.Writer}}
            {{introSerial.Plot}}
            {{introSerial.Poster}}
        </div>

        <div class="content">
            {{episodes}}
        </div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "EpisdoesDetail",
        async created() {
            await Promise.allSettled([
                this.fetchDataOmd()
            ]);
        },
        computed: {
            ...mapGetters('episodes', ['episodes', 'loaded']),
            ...mapGetters('omd', ['infoSerial']),
            introSerial() {
                return this.infoSerial
            },
        },
        methods: {
            ...mapActions('episodes', ['fetchData']),
            ...mapActions('omd', ['fetchDataOmd']),
        }
    }
</script>

<style scoped>

</style>
