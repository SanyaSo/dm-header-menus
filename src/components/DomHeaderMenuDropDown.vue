<template>
  <div :id="id" class="dom-header-menu-dropdown">
    <div @click="showMenuDropdownBody" class="dom-header-menu-dropdown__triger">
      <span class="dom-header-menu-dropdown__title">{{ menu.name }}</span>
      <span
        class="dom-header-menu-dropdown__icon icon-chevron_down"
        :class="{ 'dom-header-menu-dropdown__icon--active': isShow }"
      ></span>
    </div>
    <div v-if="isShow" class="dom-header-menu-dropdown__body">
      <dom-header-tree-list :menus="menu.children" />
    </div>
  </div>
</template>

<script>
import DomHeaderTreeList from "./DomHeaderTreeList.vue";
export default {
  components: { DomHeaderTreeList },
  props: {
    menu: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isShow: false,
      id: null,
    };
  },
  watch: {
    isShow() {
      if (this.isShow) {
        document.addEventListener("click", this.closeIfClickedOutside);
      }
    },
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    showMenuDropdownBody() {
      this.isShow = !this.isShow;
    },
    hideMenuDropdownBody() {
      this.isShow = false;
    },
    closeIfClickedOutside(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isShow = false;

        document.removeEventListener("click", this.closeIfClickedOutside);
      }
    },
  },
};
</script>

<style lang="scss">
.dom-header-menu-dropdown {
  &__triger {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: 24px;
    column-gap: 4px;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }
  &__title {
    font-size: 14px;
    line-height: 20px;
    color: #6e6e73;
    font-weight: 700;
  }
  &__icon {
    font-size: 16px;
    line-height: 20px;
    color: #6e6e73;
    transition: 0.3s;

    &--active {
      transition: 0.3s;
      transform: rotate(180deg);
    }
  }
  &__body {
    background: #fff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 8%);
    padding: 30px 0;
    border: none;
    left: 0;
    right: 0;
    top: 100px;
    position: fixed;
    border-radius: 0;
    z-index: 1;
  }
}
</style>
