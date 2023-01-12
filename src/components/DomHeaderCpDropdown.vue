<template>
  <div class="dom-header-cp-dropdown">
    <a
      @mouseenter="visible = true"
      class="dom-header-cp-dropdown__triger"
      href="https://dom.kz/cp"
      >{{ userName }}</a
    >
    <div
      @mouseleave="visible = false"
      v-if="visible"
      class="dom-header-cp-dropdown__body"
    >
      <a
        class="dom-header-cp-dropdown__item"
        v-for="item in dropDownOptions"
        :key="item.id"
        :href="item.href"
      >
        <span class="dom-header-cp-dropdown__icon" :class="item.icon"></span>
        <span class="dom-header-cp-dropdown__title">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "asgfAEG",
    },
  },
  data() {
    return {
      dropDownOptions: [
        {
          id: 1,
          title: "Настройки",
          icon: "icon-settings_outlined",
          href: "https://dom.kz/cp/setting",
        },
        {
          id: 2,
          title: "Мои объявления",
          icon: "icon-format_points",
          href: "https://dom.kz/cp/my",
        },
        {
          id: 3,
          title: "Сохраненное",
          icon: "icon-heart_outlined",
          href: "https://dom.kz/saved?tabIndex=0",
        },
        {
          id: 4,
          title: "Документы",
          icon: "icon-file_text_outlined",
          href: "https://dom.kz/cp/docs",
        },
        {
          id: 5,
          title: "Уведомления",
          icon: "icon-notifications_outlined",
          href: "https://dom.kz/cp/notifications",
        },
      ],
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.dom-header-cp-dropdown {
  position: relative;
  &__body {
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 8%);
    width: 276px;
    border-radius: 12px;
    position: absolute;
    top: 30px;
    left: -276px;
  }

  &__triger {
    color: #6e6e73;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    text-decoration: none;
  }

  &__item {
    display: flex;
    padding: 16px;
    column-gap: 8px;
    text-decoration: none;
  }
  &__icon {
    font-size: 20px;
    line-height: 20px;
    color: #5956e0;
  }
  &__title {
    font-size: 14px;
    line-height: 20px;
    color: #33333d;
    font-weight: 700;
  }
}
</style>
