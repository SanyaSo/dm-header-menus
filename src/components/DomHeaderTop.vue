<template>
  <div class="dom-header-top">
    <div class="dom-header-container dom-header-top__container">
      <div class="dom-header-top__logo">
        <a href="https://dom.kz"><img src="../assets/Logo.svg" alt="" /></a>
      </div>
      <div class="dom-header-top__user">
        <div class="dom-header-top__user-actions">
          <dom-header-user-link
            title="Подать объявление"
            href="https://dom.kz/listing/add"
            icon="icon-add_circle_outlined"
          />
          <dom-header-user-link
            title="Сохраненное"
            href="https://dom.kz/saved?tabIndex=0"
            icon="icon-heart_outlined"
            :count="favoriteCount"
          />
          <dom-header-user-link
            title="Сравнение"
            href="https://dom.kz/saved?tabIndex=1"
            icon="icon-comparison"
            :count="comparisonCount"
          />
          <dom-header-user-link
            :href="notificationUrl"
            icon="icon-notifications_outlined"
            :indicator="notificationIndicator"
          />
        </div>
        <div class="dom-header-top__user-info">
          <a v-if="userName === 'Войти/Регистрация'" :href="authUrl">{{
            userName
          }}</a>
          <dom-header-cp-dropdown v-else :userName="userName" />
        </div>
      </div>
      <div class="dom-header-top__user-mobile">
        <dom-header-user-link
          icon="icon-add_circle_outlined"
          href="https://dom.kz/listing/add"
        />
        <dom-header-user-link
          icon="icon-heart_outlined"
          href="https://dom.kz/saved?tabIndex=0"
          :count="favoriteCount"
        />
        <dom-header-user-link
          icon="icon-comparison"
          href="https://dom.kz/saved?tabIndex=1"
          :count="comparisonCount"
        />
        <dom-header-user-link
          icon="icon-notifications_outlined"
          :indicator="notificationIndicator"
        />
        <span
          @click="openMenuModal"
          class="dom-header-top__menu-btn icon-menu_left_right"
        ></span>
      </div>
      <dom-header-menu-modal ref="menumodal">
        <dom-header-menu-modal-user-name :user-name="userName" />
        <dom-header-menu-modal-list :menus="menus" />

        <template #footer>
          <dom-header-menu-modal-link-list :links="links" />
        </template>
      </dom-header-menu-modal>
    </div>
  </div>
</template>

<script>
import getUserFavoriteCount from "../services/FavoriteService";
import getUserComparisonCount from "../services/ComparisonService";
import userHasNotification from "../services/NotificationService";
import getUserInfo from "../services/UserService";
import getMenus from "../services/WebSiteService";
import DomHeaderUserLink from "./DomHeaderUserLink.vue";
import DomHeaderMenuModal from "./domHeaderMenuModal/DomHeaderMenuModal.vue";
import DomHeaderMenuModalUserName from "./domHeaderMenuModal/DomHeaderMenuModalUserName.vue";
import DomHeaderMenuModalList from "./domHeaderMenuModal/DomHeaderMenuModalList.vue";
import DomHeaderMenuModalLinkList from "./domHeaderMenuModal/DomHeaderMenuModalLinkList.vue";
import DomHeaderCpDropdown from "./DomHeaderCpDropdown.vue";

export default {
  components: {
    DomHeaderUserLink,
    DomHeaderMenuModal,
    DomHeaderMenuModalUserName,
    DomHeaderMenuModalList,
    DomHeaderMenuModalLinkList,
    DomHeaderCpDropdown,
  },
  props: {
    favoriteAdded: {
      type: Object,
      default() {
        return {};
      },
    },
    favoriteRemoved: {
      type: Object,
      default() {
        return {};
      },
    },
    comparisonAdded: {
      type: Object,
      default() {
        return {};
      },
    },
    comparisonRemoved: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      favoriteCount: 0,
      comparisonCount: 0,
      notificationIndicator: false,
      profile: null,
      menus: [],
      links: [],
    };
  },
  watch: {
    favoriteAdded: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.favoriteCount = await getUserFavoriteCount();
        } else {
          this.favoriteCount = this.getLocalSavedHousingCount("favorites");
        }
      },
    },
    comparisonAdded: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.comparisonCount = await getUserComparisonCount();
        } else {
          this.comparisonCount = this.getLocalSavedHousingCount("comparisons");
        }
      },
    },
    favoriteRemoved: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.favoriteCount = await getUserFavoriteCount();
        } else {
          this.favoriteCount = this.getLocalSavedHousingCount("favorites");
        }
      },
    },
    comparisonRemoved: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.comparisonCount = await getUserComparisonCount();
        } else {
          this.comparisonCount = this.getLocalSavedHousingCount("comparisons");
        }
      },
    },
  },
  computed: {
    userName() {
      if (this.profile && this.profile.name) {
        return this.profile.name;
      } else {
        return "Войти/Регистрация";
      }
    },
    currentURL() {
      return window.location.origin;
    },
    authUrl() {
      return `https://staging.dom.kz/login?destination=${this.currentURL}`;
    },
    notificationUrl() {
      if (this.profile && this.profile.name) {
        return "https://dom.kz/cp/notifications";
      } else {
        return this.authUrl;
      }
    },
  },
  async mounted() {
    this.profile = await getUserInfo();

    if (this.profile && this.profile.name) {
      this.favoriteCount = await getUserFavoriteCount();
      this.comparisonCount = await getUserComparisonCount();
      this.notificationIndicator = await userHasNotification();
    } else {
      this.comparisonCount = this.getLocalSavedHousingCount("comparisons");
      this.favoriteCount = this.getLocalSavedHousingCount("favorites");
      this.notificationIndicator = false;
    }
    const menus = await getMenus();
    this.menus = menus[0].menu.filter((el) => el.children.length);
    this.links = menus[0].menu.filter((el) => !el.children.length);
    console.log("header top", this.menus);
  },
  methods: {
    openMenuModal() {
      this.$refs.menumodal.showMenuModal();
    },
    getLocalSavedHousingCount(key) {
      if (JSON.parse(localStorage.getItem(key))) {
        const savedHousings = JSON.parse(localStorage.getItem(key));
        return savedHousings.length;
      } else return 0;
    },
  },
};
</script>

<style lang="scss">
.dom-header-top {
  background: #f7f7fa;

  @media (max-width: 991px) {
    background: #ffff;
  }
  &__logo {
    width: 100px;
    height: 40px;
    object-fit: cover;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 1.47fr;
    padding: 5px 16px;
  }
  a {
    color: #6e6e73;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    text-decoration: none;
  }
  &__menu-btn {
    font-size: 20px;
    line-height: 20px;
    display: block;
    color: #5956e0;
  }
  &__icon {
    font-size: 16px !important;
    line-height: 20px;
  }

  &__user {
    display: flex;
    column-gap: 48px;
    justify-content: space-between;
    @media (max-width: 991px) {
      display: none;
    }

    &-actions {
      display: flex;
      column-gap: 16px;
    }
    &-mobile {
      display: none;
      @media (max-width: 991px) {
        display: flex;
        justify-content: flex-end;
        column-gap: 16px;
      }
    }
  }
  &__user-info {
    display: flex;
    align-items: center;
  }
}
</style>
