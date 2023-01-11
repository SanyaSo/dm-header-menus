<template>
  <div v-if="isShow" class="dom-header-menu-modal">
    <div class="dom-header-menu-modal__container">
      <div class="dom-header-menu-modal__header">
        <span @click="hideMenuModal" class="icon-clear"></span>
      </div>
      <div class="dom-header-menu-modal__body">
        <slot />
      </div>
    </div>
    <div class="dom-header-menu-modal__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    hideMenuModal() {
      this.isShow = false;
    },
    showMenuModal() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="scss">
.dom-header-menu-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__container {
    height: calc(100% - 52px);
  }

  &__header {
    padding: 16px;
    background: #f7f7fa;

    span {
      font-size: 20px;
      line-height: 20px;
      display: block;
      color: #5956e0;
    }
  }
  &__body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
}
</style>
