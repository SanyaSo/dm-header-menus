<template>
  <div class="dom-header">
    <dom-header-top
      :favoriteAdded="favoriteAdded"
      :favoriteRemoved="favoriteRemoved"
      :comparisonAdded="comparisonAdded"
      :comparisonRemoved="comparisonRemoved"
      :destination="destination"
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
    destination: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.dom-header-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
