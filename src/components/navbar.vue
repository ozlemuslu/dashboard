<template>
  <div class="grid-navbar">
    <language-choice/>
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
        <search-box v-model="filterText" class="searchBox mt-15" :placeholder="$t('dashboard.filterUsers')" @change="filterUsers(filterText)"/>
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
            <span class="mr-20 clickable"><fa-icon icon="home" @click="refreshPage"/></span>
            <!-- <span class="mr-20"><fa-icon icon="plus-square"/></span> -->
            <span v-tooltip="$t('common.comingSoon')" class="mr-20 clickable"><fa-icon icon="heart"/></span>
            <span class="mr-20 clickable" ><fa-icon icon="globe" @click="openLanguageModal"/></span>
          </div>
        </div>
        <div class="col-navbar">
          <div class="section-navbar clickable">
            <span v-tooltip="$t('common.comingSoon')" class="mr-20"> <img src="../assets/ozlem.jpeg" alt=""></span>
          </div>
        </div>
      </div>
        
    </div>
  </div>
</template>

<script>

import searchBox from '../components/searchBox.vue';
import languageChoice from '../components/modals/languageChoice.vue';

export default {
  name: 'navbar',
  components: { searchBox, languageChoice },
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
  refreshPage() {
    this.$emit('refresh-page');
  },
  filterUsers(filterText) {
    this.$emit('filter', filterText);
  },
  openLanguageModal() {
    this.$modal.show('languageChoice');
  },
  },
}
</script>

<style>
</style>
