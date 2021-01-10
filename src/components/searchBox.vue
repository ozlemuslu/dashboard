<template>
  <div>
    <span><fa-icon icon="search"/></span>
    <input v-model="filter" :placeholder="placeholder" type="search" class="input">
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  model: {
    prop: 'searchText',
    event: 'change',
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    searchText: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      filter: '',
    };
  },
  watch: {
    searchText() {
      this.filter = this.searchText;
    },
    filter() {
      this.$emit('change', this.filter);
    },
  },
};
</script>

<style>

</style>
