<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Music Library</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="search" class="form-group">
          <input type="text" placeholder="Search by artist..." v-model="query" required>
          <button class="btn btn-success" type="submit">Search music</button>
        </form>
      </div>
    </div>
    <results></results>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'
  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {

    },
    methods: {
      search() {
        this.$store.dispatch('getMusicByArtist', this.query)
      }
    },
    components: {
      Results
    }
  }
</script>

<style>
  .home {
    background-color: rgb(123, 223, 123);
  }
</style>