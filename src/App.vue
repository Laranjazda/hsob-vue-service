<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos" :key="foto">
        <div>
          <p>{{ foto.titulo }}</p>
          <img :src="foto.url" :alt="foto.titulo" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      titulo: "H.S.O.B. Service",
      fotos: [],
    };
  },
  created() {
    this.getFotosList();
  },

  methods: {
    getFotosList() {
      axios
        .get("http://localhost:2020/api/photos/get-photo-list")
        .then((res) => res.data)
        .then((fotos) => (this.fotos = fotos))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
