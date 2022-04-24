<template>
  <img class="imagem-responsiva" :src="url" :alt="description" />
</template>

<script>
export default {
    props:['url', 'description']
}
</script>

<style scoped>
.imagem-responsiva {
  width: 98%;
}
</style>
