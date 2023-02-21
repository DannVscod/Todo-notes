<template>
  <div class="container">
    <h1>Anotações</h1>
    <hr />
    <formulario v-on:add-todo="addAnotacao"></formulario>
    <div class="list-group">
      <div class="list-item" v-for="(comment, index) in allComments" v-bind:key="index">
        <span class="comment__author">Autor: <strong>{{ comment.name }}</strong></span>
        <p>{{ comment.message }}</p>
        <div>
          <a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import Formulario from './Formulario.vue';
export default {
  components: { Formulario },
  data() {

    return {
      comments: [],
    }

  },
  methods: {
    removeComment(index) {
      this.comments.splice(index, 1);
    }
  },
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name
      }))
    }
  },
  watch: {
    comments(val) {
      console.log('val', val)
    }
  }
};
</script>