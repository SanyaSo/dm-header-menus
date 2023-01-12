<template>
  <div class="dom-header-bottom">
    <dom-header-menu-drop-down
      v-for="menu in menus"
      :key="menu.id"
      :menu="menu"
    />
    <dom-header-menu-link v-for="link in links" :key="link.id" :link="link" />
  </div>
</template>

<script>
import DomHeaderMenuDropDown from "./DomHeaderMenuDropDown.vue";
import DomHeaderMenuLink from "./DomHeaderMenuLink.vue";
import axios from "axios";
export default {
  components: { DomHeaderMenuDropDown, DomHeaderMenuLink },
  name: "dm-header",
  data() {
    return {
      menus: [],
      links: [],
    };
  },
  async mounted() {
    const menus = await this.getMenus();
    this.menus = menus[0].menu.filter((el) => el.children.length);
    this.links = menus[0].menu.filter((el) => !el.children.length);
  },
  methods: {
    async getMenus() {
      const data = await axios.get("https://api-site.dom.kz/api/menu");
      return data.data.data;
    },
  },
};
</script>

<style lang="scss">
.dom-header-bottom {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
}
</style>
