<template>
  <div class="dom-header-menu-modal-user-name">
    <span>{{ userName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "Войти/Регистрация",
    },
  },
};
</script>

<style lang="scss">
.dom-header-menu-modal-user-name {
  padding: 16px;
  border-bottom: 1px solid #f7f7fa;
  margin-bottom: 16px;

  span {
    color: #33333d;
    font-weight: 700;
  }
}
</style>
