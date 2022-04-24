<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <SearchInput v-on:input="filtro = $event.target.value"/> 

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in photosFilter" :key="foto">
        <PhotoPanel :title="foto.description">
          <ResponsiveImage :url="foto.url" :description="foto.description" />
        </PhotoPanel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import PhotoPanel from "./PhotoPanel.vue"
import ResponsiveImage from "../images/ResponsiveImage.vue"
import SearchInput from "../forms/SearchInput.vue"

export default {
  components:{
    PhotoPanel,
    ResponsiveImage,
    SearchInput
  },
  computed:{
    photosFilter(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.description))
      } else {
        return this.fotos
      }
    }
  },
  data() {
    return {
      titulo: "H.S.O.B. Service",
      fotos: [],
      filtro:''
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

<style scoped>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 98%;
}

</style>
