<template>
<div>
  <navbar class="sticky"/>
  <div class="grid-navbar">
    <div class="col-navbar white-smoke">
      <div class="section-dashboard">
      </div>
    </div>

    <div class="col-navbar">
      <div class="section-dashboard">
      </div>
    </div>

     <div class="col-navbar white-smoke">
      <div class="section-dashboard">
      </div>
    </div>
</div>
</div>

</template>
<script>

import navbar from '../components/navbar.vue';
import dashboardService from '../services/dashboard';

export default {
  name: 'Dashboard',
  components: { navbar },
  props: {
  },
  data() {
    return {
      posts: [],
      comments: [],
      albums: [],
      filterText: undefined,
    };
  },
  computed: {
    availableLang() {
      return this.$store.state.availableLocales;
    },
  },
  mounted() {
    this.getComments();
  },
  methods: {
  changeLanguage() {
    
  },
  filterUsers() {
    console.log('filterUsers')
  },
  async getPosts() {
    this.posts = await dashboardService.getPosts();
   },
   async getComments() {
    this.comments = await dashboardService.getComments();
   },
    async getAlbums() {
    this.albums = await dashboardService.getAlbums();
   },
  },
}
</script>

<style>
</style>
