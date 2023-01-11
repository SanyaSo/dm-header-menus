<template>
  <div class="dom-header-tree-list">
    <div
      v-for="menu in menus"
      :key="menu.id"
      class="dom-header-tree-list__body"
    >
      <div class="dom-header-tree-list__title">
        <span>{{ menu.name }}</span>
      </div>

      <div class="dom-header-tree-list__link-container">
        <a
          v-show="menuLink.name !== 'all'"
          :href="`https://dom.kz${menuLink.url}`"
          v-for="menuLink in menu.children"
          :key="menuLink.id"
          >{{ menuLink.name }}</a
        >
      </div>
      <div
        v-if="hasLinkToAll(menu.children)"
        class="dom-header-tree-list__link-to-all"
      >
        <a
          :href="`https://dom.kz/${
            hasLinkToAll(menu.children).children[0].url
          }`"
          >{{ hasLinkToAll(menu.children).children[0].name }}</a
        >
        <span class="icon-arrow_forward"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    hasLinkToAll(menuLinks) {
      return (
        menuLinks &&
        menuLinks.length &&
        menuLinks.find((el) => el.name === "all")
      );
    },
  },
};
</script>

<style lang="scss">
.dom-header-tree-list {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 16px;
    row-gap: 48px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    border-right: 1px solid #ededf2;
    padding-right: 24px;
    margin-right: 24px;
    min-width: 400px;
    &:last-child {
      border: none;
    }

    @media (max-width: 991px) {
      border: none;
      padding-right: 0;
      margin-right: 0;
      row-gap: 16px;
      min-width: 0;
    }
  }
  &__title {
    color: #6e6e73;
  }
  &__link-container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    @media (max-width: 991px) {
      row-gap: 24px;
    }

    a {
      font-size: 14px;
      color: #6e6e73;
      line-height: 20px;
      text-decoration: none;
      font-weight: 700;
      &:hover {
        color: #5956e0;
      }
    }
  }
  &__link-to-all {
    display: flex;
    align-items: center;
    column-gap: 4px;
    a {
      font-size: 14px;
      color: #6e6e73;
      line-height: 20px;
      text-decoration: none;
      font-weight: 700;
      border-top: 1px solid #ededf2;
      padding-top: 8px;
      &:hover {
        color: #5956e0;
      }
    }
    span {
      padding-top: 8px;
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>
