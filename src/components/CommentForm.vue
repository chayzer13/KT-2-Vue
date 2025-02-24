<template>
    <div class="comment-form">
      <input v-model="newComment" placeholder="Введите комментарий" />
      <button @click="addComment">Добавить</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { usePostsStore } from '../store/postsStore';
  
  export default {
    props: ['postId'],
    setup(props) {
      const store = usePostsStore();
      const newComment = ref('');
  
      const addComment = () => {
        if (newComment.value.trim()) {
          store.addComment(props.postId, newComment.value);
          newComment.value = '';
        }
      };
  
      return { newComment, addComment };
    }
  };
  </script>