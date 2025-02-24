<template>
    <div class="post-form">
      <input v-model="newPost" placeholder="Введите текст поста" />
      <button @click="addPost">Добавить</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { usePostsStore } from '../store/postsStore';
  
  export default {
    setup() {
      const store = usePostsStore();
      const newPost = ref('');
  
      const addPost = () => {
        if (newPost.value.trim()) {
          store.addPost(newPost.value);
          newPost.value = '';
        }
      };
  
      return { newPost, addPost };
    }
  };
  </script>