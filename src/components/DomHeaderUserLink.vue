<template>
  <div class="dom-header-user-link">
    <a :href="href">
      <div class="dom-header-user-link__icon-box">
        <span v-if="count" class="dom-header-user-link__indicator">{{
          count
        }}</span>
        <span
          v-if="indicator"
          class="dom-header-user-link__indicator dom-header-user-link__indicator--small"
        />
        <span class="dom-header-user-link__icon" :class="icon" />
      </div>
      <span class="dom-header-user-link__title">{{ title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    count: {
      type: [Number, String],
      default: 0,
    },
    indicator: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.dom-header-user-link {
  text-decoration: none;
  color: #6e6e73;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  &__icon {
    font-size: 20px;
    line-height: 20px;
    display: block;
    color: #5956e0;
  }
  &__title {
    font-size: 14px;
    line-height: 20px;
    display: block;
    font-weight: 700;
  }
  &__indicator {
    width: 20px;
    height: 20px;
    font-weight: 400;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    position: absolute;
    z-index: 20;
    right: -4px;
    top: -8px;
    background: #cd1e1e;
    border: 2px solid #f7f7fa;
    border-radius: 50%;

    &--small {
      width: 9px !important;
      height: 9px !important;
      right: 3px;
      top: -4px;
      border: 1px solid #fff;
    }
  }
  &__icon-box {
    position: relative;
  }
}
</style>
