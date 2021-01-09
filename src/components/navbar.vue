<template>
  <div class="grid-navbar">
    <div class="col-navbar">
      <div class="section-navbar mt-15">
         <div class="section-navbar"><strong>{{ $t('dashboard.dashboard')}}</strong></div>
      </div>
    </div>

    <div class="col-navbar">
      <div class="section-navbar">
        <div class="col-navbar">
        </div>

         <div class="col-navbar">
          <div class="section-navbar"></div>
        </div>
        <search-box v-model="filterText" class="searchBox mt-15" :placeholder="$t('dashboard.filterUsers')" @change="filterUsers"/>
      </div>

    </div>

    <div class="col-navbar">
      <div class="section-navbar">
        <div class="col-navbar">
           <div class="section-navbar">
         </div>
        </div>
       <div class="col-navbar">
       <div class="section-navbar mt-15">
         <span class="mr-20"><fa-icon icon="home"/></span>
         <!-- <span class="mr-20"><fa-icon icon="plus-square"/></span> -->
         <span class="mr-20"><fa-icon icon="heart"/></span>
         <span class="mr-20"><fa-icon icon="globe" @click="changeLanguage"/></span>
      </div>
      </div>
       <div class="col-navbar">
           <div class="section-navbar">
               <span class="mr-20"> <img src="../assets/ozlem.jpeg" alt=""></span>
         </div>
        </div>
      </div>
        
   </div>
</div>
</template>

<script>

import searchBox from '../components/searchBox.vue';

export default {
  name: 'navbar',
  components: { searchBox },
  props: {
  },
  data() {
    return {
      filterText: undefined,
    };
  },
  mounted() {
  },
  methods: {
  filterUsers() {
    console.log('filterUsers')
  },
  changeLanguage() {
    
  },
  },
}
</script>

<style>
</style>
