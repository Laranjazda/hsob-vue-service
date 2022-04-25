<template>
  <button @click="actions()" class="button button-default" :type="type">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["type", "label", "confirmation"],
  methods: {
    actions() {
      if (this.confirmation) {
        if (confirm("Tem certeza que deseja Excluir?")) {
          this.$emit("buttonActivated");
        }
        return
      }
      this.$emit("buttonActivated")
    }
  },
//   computed:{
//       buttonStyle(){
//       if(this.style =="default") return 'button button-default';
//       if(this.style =="default") return 'button button-danger';
//     }
//   }
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.button-danger {
  background: firebrick;
  color: white;
}

.button-default {
  background: darkcyan;
  color: white;
}
</style>