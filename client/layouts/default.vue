<template>
  <div>
    <Nuxt/>

    <GDPRContentModal/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GDPRContentModal from "~/components/utilities/GDPRConsentPopup.vue";

export default Vue.extend({
  components: {GDPRContentModal}
});
</script>

<style>
html {
  font-family: 'Inter',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  line-height: 1.65;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
