<template>
  <div class="navbar">
  <nav>
  <span><strong>{{ $t('dashboard.dashboard')}}</strong></span>
   <a href="#"> <fa-icon icon="home"/> </a>
  </nav>
    
    <!-- <div>{{ posts}}</div>
    <div>{{ comments}}</div>
    <div>{{ albums}}</div> -->
  </div>

</template>

<script>

import dashboardService from '../services/dashboard';

export default {
  name: 'Dashboard',
  props: {
  },
  data() {
    return {
      posts: [],
      comments: [],
      albums: [],
    };
  },
  mounted() {
    this.getComments();
  },
  methods: {
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
