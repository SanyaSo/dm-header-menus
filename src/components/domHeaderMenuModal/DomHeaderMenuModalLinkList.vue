<template>
  <div class="dom-header-menu-modal-link-list">
    <div v-for="link in links" :key="link.id" class="dom-header-menu-modal-link-list__item">
        <a :href="href(link.url)">{{ link.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        href(path) {
            if (this.isAbsolutePath(path)) {
                return path;
            } else {
                return `https://dom.kz${path}`;
            }
        },
        isAbsolutePath(path) {
            const regex = /^(http|https):\/\//;
            return regex.test(path);
        },
    }
}
</script>

<style lang="scss">
.dom-header-menu-modal-link-list {
    &__item {
        background: #f7f7fa;
        padding: 16px;

        a {
            font-weight: 700;
            color: #33333d;
            text-decoration: none;
        }
    }
}
</style>