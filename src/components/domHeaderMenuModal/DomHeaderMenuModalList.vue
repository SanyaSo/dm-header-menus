<template>
  <div class="dom-header-menu-modal-list">
    <div
      v-for="menu in menus"
      :key="menu.id"
      class="dom-header-menu-modal-list__item"
      @click="openChildLinksModal(menu.id)"
    >
      <span>{{ menu.name }}</span>
      <span class="dom-header-menu-modal-list__icon icon-chevron_down"></span>
    </div>
    <dom-header-menu-modal v-for="menu in menus" :key="menu.id" :ref="`${menu.id}-ref`">
      <dom-header-tree-list :menus="menu.children"/>
    </dom-header-menu-modal>
  </div>
</template>

<script>
import DomHeaderTreeList from '../DomHeaderTreeList.vue';
import DomHeaderMenuModal from './DomHeaderMenuModal.vue';
export default {
  components: { DomHeaderMenuModal, DomHeaderTreeList },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    openChildLinksModal (id) {
      console.log(id)
      const ref = `${id}-ref`
      console.log(this.$refs[ref][0])
      this.$refs[ref][0].showMenuModal()
    }
  }
};
</script>

<style lang="scss">
.dom-header-menu-modal-list {
  display: flex;
  flex-direction: column;

  &__item {
    border-bottom: 1px solid #f7f7fa;
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }
  &__icon {
    transform: rotate(-90deg);
  }
}
</style>
