
<template>
  <div class="painel">
    <h2 class="painel-titulo" v-on:dblclick="visible = !visible">
      {{ title }}
    </h2>
    <transition name="panel-fade">
      <div class="painel-corpo" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "photoPanel",
  props: ["title"],
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.panel-fade-enter, .panel-fade-leave-active{
  opacity: 0;
}

.panel-fade-enter-active, .panel-fade-leave-active{
  transition: opacity .3s;
}
</style>
