<template>
    <div class="comment">
      <p>{{ comment.text }}</p>
      <button @click="store.deleteComment(postId, comment.id)">Удалить</button>
    </div>
  </template>
  
  <script>
  import { usePostsStore } from '../store/postsStore';
  
  export default {
    props: ['comment', 'postId'],
    setup() {
      const store = usePostsStore();
      return { store };
    }
  };
  </script>