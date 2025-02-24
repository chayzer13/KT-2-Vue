<template>
    <div class="modal">
      <div class="modal-content">
        <textarea v-model="editedTitle"></textarea>
        <button @click="store.savePost(editedTitle)">Сохранить</button>
        <button @click="store.editingPost = null">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script>
  import { usePostsStore } from '../store/postsStore';
  import { ref, watch } from 'vue';
  
  export default {
    setup() {
      const store = usePostsStore();
      const editedTitle = ref('');
  
      watch(() => store.editingPost, (newPost) => {
        editedTitle.value = newPost ? newPost.title : '';
      });
  
      return { store, editedTitle };
    }
  };
  </script>