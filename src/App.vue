<template>
  <div id="app">
    <dom-header-bottom />
    <dom-header-mobile-menu />
  </div>
</template>

<script>
import DomHeaderBottom from "./components/DomHeaderMenus.vue";
import DomHeaderMobileMenu from "./components/DomHeaderMobileMenu.vue";

export default {
  components: { DomHeaderBottom, DomHeaderMobileMenu },
  name: "App",
};
</script>

<style></style>
