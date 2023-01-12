import DmHeaderMenus from "./components/DomHeader.vue";

const plugin = {
  install(Vue) {
    Vue.component(DmHeaderMenus.name, DmHeaderMenus);
  },
};
DmHeaderMenus.install = plugin.install;

export default DmHeaderMenus;
