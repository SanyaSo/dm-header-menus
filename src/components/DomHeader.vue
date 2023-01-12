<template>
  <div class="dom-header">
    <dom-header-top
      :favoriteAdded="favoriteAdded"
      :favoriteRemoved="favoriteRemoved"
      :comparisonAdded="comparisonAdded"
      :comparisonRemoved="comparisonRemoved"
    />
    <dom-header-bottom />
  </div>
</template>

<script>
import DomHeaderBottom from "./DomHeaderMenus.vue";
import DomHeaderTop from "./DomHeaderTop.vue";
export default {
  components: { DomHeaderTop, DomHeaderBottom },
  name: "dm-header-menus",
  props: {
    favoriteAdded: {
      type: Object,
      default() {
        return {};
      },
    },
    favoriteRemoved: {
      type: Object,
      default() {
        return {};
      },
    },
    comparisonAdded: {
      type: Object,
      default() {
        return {};
      },
    },
    comparisonRemoved: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.dom-header {
  border-bottom: 1px solid #f7f7fa;
}
.dom-header-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
