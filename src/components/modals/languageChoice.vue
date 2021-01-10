<template>
  <modal name="languageChoice" width="400" height="auto">
    <div class="margin-modal">
      <div>
        <div class="modal-header modal-title is-size-4">{{ $t('navbar.languageChoice') }} </div>
      </div><br>
      <div class="modal-body">
        <div v-for="lang in availableLang" :key="lang">
          <label class="clickable">
            <input v-model="picked" type="radio" name="radio" :value="lang"> {{ lang }}
          </label><br>
        </div><br>
      </div>
      <div class="modal-footer">
        <button class="is-pulled-right success-button" @click="save"> {{ $t('common.save') }}</button>
        <button class="is-pulled-left" @click="close">{{ $t('common.quit') }}</button>
      </div>
    </div><br>
  </modal>
</template>
<script>


export default {
  name: 'languageChoice',
  data() {
    return {
      picked: this.$store.state.availableLocales[this.$i18n.locale],
    };
  },
  computed: {
    availableLang() {
      return this.$store.state.availableLocales;
    },
  },
  methods: {
  save() {
    const index = Object.values(this.availableLang).indexOf(this.picked);
    this.$i18n.locale = Object.keys(this.availableLang)[index];
    this.close();
  },
  close() {
   this.$modal.hide('languageChoice');
   }
  },
};
</script>

<style>
</style>
