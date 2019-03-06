<template>
    <div class="details col-7">
        <img :src="song.artworkUrl100" alt=""><br>
        <h1>{{song.trackName}}</h1>
        <h2>{{song.artistName}}</h2>
        <h3>{{song.collectionName}}</h3>
        <h5>{{Math.floor(song.trackTimeMillis/60000)}}:{{Math.floor(song.trackTimeMillis/1000*60)}}<br>{{song.primaryGenreName}} - {{song.releaseDate.slice(0, 4)}}</h5>
        <audio controls :src="song.previewUrl" type="audio/mp3"></audio><br>
        <button class="btn btn-outline-light">Buy song ${{song.trackPrice}}</button><button
            class="btn btn-outline-light">Buy album ${{song.collectionPrice}}</button>
    </div>
</template>

<script>
    export default {
        name: 'Details',
        props: ['song'],
        data() {
            return {

            }
        },
        computed: {},
        methods: {}
    }
</script>

<style>
    img {
        height: 400px;
        width: 400px;
        box-shadow: 2px 2px 15px black;
    }

    h1,
    h2,
    h3 {
        text-shadow: 0 2px 2px black;
    }
</style>