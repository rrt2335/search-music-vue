<template>

    <div class="results row d-flex justify-content-around">
        <div class="col-4 yellow">
            <ol>
                <li v-for="song in results" @click='setActiveSong(song)'>{{song.trackName}}</li>
            </ol>

        </div>
    </div>

</template>

<script>

    import DetailsView from '@/components/Details.vue'
    export default {
        name: '',
        data() {
            return {
                activeSong: {}
            }
        },
        computed: {
            results() {
                return this.$store.state.results
            }
        },
        methods: {
            setActiveSong(song) {
                this.activeSong = song;
            }
        },
        components: {
            DetailsView
        }
    }




</script>