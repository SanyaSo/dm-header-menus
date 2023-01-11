<template>
  <div class="dom-header-menu-link">
    <a :href="href">{{ link.name }}</a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    href() {
      if (this.isAbsolutePath(this.link.url)) {
        return this.link.url;
      } else {
        return `https://dom.kz${this.link.url}`;
      }
    },
  },
  methods: {
    isAbsolutePath(path) {
      const regex = /^(http|https):\/\//;
      return regex.test(path);
    },
  },
};
</script>

<style lang="scss">
.dom-header-menu-link {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 24px;
  a {
    font-size: 14px;
    line-height: 20px;
    color: #6e6e73;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
