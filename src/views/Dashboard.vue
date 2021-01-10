<template>
  <div>
    <navbar class="sticky" @refresh-page="refreshPage"/>
    <div class="row">
      <div class="col-navbar white-smoke col">
        <div class="section-dashboard">
        </div>
      </div>

      <div v-if="showUsers && !showPhotos" class="col-navbar col" :class="{'height-less-twelve': lessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="user in users"
               :key="user.id"
               @click="chooseUser(user.id)">
            <span class="mr-20 clickable"><fa-icon icon="user-circle"/></span>
            <span class="clickable">{{ user.name }}</span><br><br>
          </div>
        </div>
      </div>

      <div v-if="!showUsers && showPhotos" class="col-navbar col" :class="{'height-less-twelve': lessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="album in albums"
               :key="album.id"
               @click="chooseAlbum(album.userId)">
            <span class="mr-20 clickable"><fa-icon icon="images"/></span>
            <span class="clickable">{{ album.title }}</span><br><br>
          </div>
        </div>
      </div>

      <div v-if="showUsers && showPhotos" class="col-navbar col" :class="{'height-less-twelve': lessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="post in posts"
               :key="post.id"
               @click="choosePhoto(post.userId)">
            <span class="mr-20 clickable"><fa-icon icon="image"/></span>
            <span class="clickable">{{ post.title }}</span><br><br>
          </div>
        </div>
      </div>

      <div v-if="!showUsers && !showPhotos" class="col-navbar col" :class="{'height-less-twelve': lessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="comment in comments"
               :key="comment.id">
            <span class="mr-20"><fa-icon icon="comment"/></span>
            <span>{{ comment.name }} ' : ' {{ comment.body }}  </span>
          </div>
        </div>
      </div>

      <div class="col-navbar white-smoke col">
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
      showPhotos: false,
      showUsers: true,
      photos: [],
      users: [],
      posts: [],
      comments: [],
      albums: [],
      filterText: undefined,
    };
  },
  computed: {
    lessThanTwelve() {
      return this.users.length < 20 ? true : false;
    },
  },
  mounted() {
    this.getUsersInfo()
  },
  methods: {
  async choosePhoto(postId) {
    try {
      this.photos = await dashboardService.getPhotos(postId);
      this.comments = await dashboardService.getComments(postId);
    } catch (error) {
      this.$snotify.error(this.$t('errors.unknown'));
    }
    this.comments = this.comments.filter((el) => el.postId === postId);
    this.
    this.showUsers = false;
    this.showPhotos = false;
  },
  chooseAlbum(userId) {
    this.posts = this.posts.filter((el) => el.userId === userId);
    this.showUsers = true;
  },
  chooseUser(userId) {
    this.albums = this.albums.filter((el) => el.userId === userId);
    this.showUsers = false;
    this.showPhotos = true;
  },
  refreshPage() {
    this.$emit('refresh-page');
  },
  filterUsers() {
    console.log('filterUsers')
  },
  async getUsersInfo() {
    try {
    this.posts = await dashboardService.getPosts();
    this.albums = await dashboardService.getAlbums();
    this.users = await dashboardService.getUsers();
    } catch (error) {
    this.$snotify.error(this.$t('errors.unknown'));
    }
   },
  },
}
</script>

<style>
</style>
