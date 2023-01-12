<template>
  <div class="dom-header-menu-modal-user-name">
    <a href="https://dom.kz/cp">{{ userName }}</a>
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

  a {
    color: #33333d;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
