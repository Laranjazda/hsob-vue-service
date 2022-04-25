<template>
  <div class="corpo">
    <MenuPages />
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import MenuPages from "./components/menu/MenuPages.vue";

export default {
  components: {
    MenuPages,
  },
};
</script>

<style scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: 0.5s;
}
</style>
