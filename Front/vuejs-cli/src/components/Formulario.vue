<template>
  <div class="form-todo form-group">
    <p>
      <input placeholder="nome" type="text" name="author" class="form-control" v-model="name" />
    </p>
    <p>
      <textarea placeholder="Anotação" name="message" class="form-control" v-model="message"></textarea>
    </p>
    <button v-on:click="addAnotacao" type="submit" class="btn btn-primary">Salvar</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
      name: '',
      message: ''
    }
  },
  methods: {
    addAnotacao() {
      if (this.message.trim() === '') {
        return;
      }

      this.name = '';
      this.message = '';
    },
  }
};
</script>