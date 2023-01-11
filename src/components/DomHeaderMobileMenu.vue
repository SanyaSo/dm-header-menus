<template>
  <div class="dom-header-mobile-menu">
    <span @click="openMenuModal" class="icon-menu_left_right"></span>
    <dom-header-menu-modal ref="menumodal">
      <dom-header-menu-modal-user-name user-name="ajdfad" />
      <dom-header-menu-modal-list :menus="menus" />

      <template #footer>
        <dom-header-menu-modal-link-list :links="links" />
      </template>
    </dom-header-menu-modal>
  </div>
</template>

<script>
import DomHeaderMenuModal from "./domHeaderMenuModal/DomHeaderMenuModal.vue";
import DomHeaderMenuModalUserName from "./domHeaderMenuModal/DomHeaderMenuModalUserName.vue";
import DomHeaderMenuModalList from "./domHeaderMenuModal/DomHeaderMenuModalList.vue";
import DomHeaderMenuModalLinkList from "./domHeaderMenuModal/DomHeaderMenuModalLinkList.vue";
import axios from "axios";
export default {
  components: {
    DomHeaderMenuModal,
    DomHeaderMenuModalUserName,
    DomHeaderMenuModalList,
    DomHeaderMenuModalLinkList,
  },
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
    console.log(this.menus);
  },
  methods: {
    async getMenus() {
      const data = await axios.get("https://api-site.dom.kz/api/menu");
      return data.data.data;
    },
    openMenuModal() {
      console.log("djsf");
    },
  },
};
</script>

<style></style>
