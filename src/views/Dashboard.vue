<template>
  <div>
    <navbar class="sticky" :show-filter="showFilter" @refresh-page="refreshPage" @filter="filter"/>
    <div class="row">
      <div class="col-navbar white-smoke col">
        <div class="section-dashboard">
        </div>
      </div>

      <div v-if="showUsers && !showPhotos" class="col-navbar col" :class="{'height-less-twelve': usersLessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="user in users"
               :key="user.id"
               @click="chooseUser(user.id)">
            <span class="mr-20 clickable icon-font-size"><fa-icon icon="user-circle"/></span>
            <span class="clickable">{{ user.name }}</span><br><br>
          </div>
        </div>
      </div>

      <div v-if="!showUsers && showPhotos" class="col-navbar col" :class="{'height-less-twelve': albumsLessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="album in albums"
               :key="album.id"
               @click="chooseAlbum(album.userId)">
            <span class="mr-20 clickable icon-font-size"><fa-icon icon="images"/></span>
            <span class="clickable">{{ album.title }}</span><br><br>
          </div>
        </div>
      </div>

      <div v-if="showUsers && showPhotos" class="col-navbar col" :class="{'height-less-twelve': postsLessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="post in posts"
               :key="post.id"
               @click="choosePost(post.id)">
            <span class="mr-20 clickable icon-font-size"><fa-icon icon="image"/></span>
            <span class="clickable">{{ post.title }}</span><br><br>
          </div>
        </div>
      </div>

      <div v-if="!showUsers && !showPhotos" class="col-navbar col" :class="{'height-less-twelve': commentsLessThanTwelve}">
        <div class="section-dashboard">
          <div v-for="comment in comments"
               :key="comment.id">
            <span class="mr-20"><fa-icon icon="comment"/></span>
            <span> {{ `${comment.name}: ` }}</span>
            <div> {{ comment.body }}</div>
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
      showFilter: true,
      showPhotos: false,
      showUsers: true,
      tempUsers: [],
      photos: [],
      users: [],
      posts: [],
      comments: [],
      albums: [],
      filterText: undefined,
    };
  },
  computed: {
    usersLessThanTwelve() {
      return this.users.length < 20 ? true : false;
    },
    albumsLessThanTwelve() {
      return this.albums.length < 20 ? true : false;
    },
    postsLessThanTwelve() {
      return this.posts.length < 20 ? true : false;
    },
    commentsLessThanTwelve() {
      return this.comments.length < 20 ? true : false;
    },
  },
  mounted() {
    this.getUsersInfo()
  },
  methods: {
  async choosePost(postId) {
    try {
      // this.photos = await dashboardService.getPhotos(postId);
      this.comments = await dashboardService.getComments(postId);
    } catch (error) {
      this.$snotify.error(this.$t('errors.unknown'));
    }
    this.comments = this.comments.filter((el) => el.postId === postId);
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
    this.showFilter = false;
  },
  refreshPage() {
    this.$emit('refresh-page');
  },
  filter(filterText) {
    this.users = this.tempUsers.filter((el) => el.name.includes(filterText));
  },
  async getUsersInfo() {
    try {
    this.posts = await dashboardService.getPosts();
    this.albums = await dashboardService.getAlbums();
    this.users = await dashboardService.getUsers();
    this.tempUsers = [...this.users];
    } catch (error) {
    this.$snotify.error(this.$t('errors.unknown'));
    }
   },
  },
}
</script>

<style>
</style>
