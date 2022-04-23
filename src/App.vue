<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <input 
    type="search" 
    class="filtro" 
    placeholder="Filtre por descriçao da foto"
    v-on:input="filtro = $event.target.value">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in photosFilter" :key="foto">
        <photoPanel :title="foto.description">
            <img
              class="imagem-responsiva"
              :src="foto.url"
              :alt="foto.description"
            />
        </photoPanel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import photoPanel from "./components/photoPanel/photoPanel.vue"
export default {
  components:{
    photoPanel
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

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
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

.filtro {
    display: block;
    width: 100%;
  }
</style>
