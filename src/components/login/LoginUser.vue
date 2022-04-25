<template>
  <div class="vh-100 vw-100 row-login">
    <col sm="5" class="d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>
        <form>
          <form label="E-mail" label-for="email">
              <input id="email" type="email" placeholder="joaosilva@email.com" autocomplete="off" v-model="form.email">
          </form>
 
          <form label-for="password">            
            <input id="password" type="password" placeholder="Digite sua senha" v-model="form.password">
          </form>

          <label class="d-flex justify-content-between">
            <small>
              <a href="#">Esqueceu sua senha?</a>
            </small>
          </label>
 
          <button
            type="button"
            variant="primary"
            block
            @click="login">
            <i class="fas fa-sign-in-alt"></i> Entrar
          </button>
 
          <hr>
 
          <button
            type="button"
            variant="outline-secondary"
            block
            @click="register">
            <i class="fas fa-user-plus"></i> Não tenho conta
          </button>
        </form>
      </div>
  </div>
</template>
 
<script>
 
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
 
  methods: {
    login() {},
 
    register() {},
 
  }
}
</script>
 
<style>
 
*, /*resetar o estilo da página*/
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
 
.row-login {
  margin-left: 0;
}
 
.left-login {
  background-color: #F2F2F2;
}
 
.title-login {
  font-weight: bold;
}
 
</style>