
<template>
	<div id="app" class="container">
		<h1>Formulário com Axios e Firebase</h1>
		<b-alert 
		show 
		dismissible 
		v-for="mensagem in mensagens"
		:key="mensagem.texto"
		:variant="mensagem.tipo"
		>
			{{ mensagem.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"
				></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Informe o Email"
				></b-form-input>
			</b-form-group>
			<hr>
			<b-button variant="primary" size="lg" @click="salvar">Salvar</b-button>
			<b-button variant="success" class="ml-2" size="lg" @click="obterUsuarios">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{ usuario.nome }}<br>
				<strong>Email:</strong> {{ usuario.email }}<br>
				<strong>ID:</strong> {{ id }}<br>
				<b-button @click="carregar(id)" variant="warning" size="lg">Carregar</b-button>
				<b-button @click="excluir(id)" class="ml-2" variant="danger" size="lg">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = '',
			this.id = null,
			this.mensagens = []
		},
		salvar() {
			//se o id existir, o método será de atualizacao, se não, será de criação
			const metodo = this.id ? 'patch' : 'post'
			//verifica url
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`usuario${finalUrl}`, this.usuario).then(() => {
				this.limpar()
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success'
				})
			})
		},
		obterUsuarios() {
			// voce pode simplesmente fazer só this.$http('usuario.json), quando nenhum
			// metodo é chamado, o axios entende que é um GET
			this.$http.get('usuario.json').then(res => {
				this.usuarios = res.data
			})
			// adiciona um header, no caso, uma autorizacao e seu token
			this.$http.defaults.headers.common['Autorizacao'] = 'senha-secreta123'
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`usuario/${id}.json`)
				.then(() => this.limpar())
				.catch(() => {
					this.mensagens.push({
						texto: 'Falha ao excluir!',
						tipo: 'danger'
					})
				})
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}
#app h1 {
	text-align: center;
	margin: 50px;
}
</style>