<template>
    <div class="post">
      <p>{{ post.title }}</p>
      <button @click="store.editPost(post)">Редактировать</button>
      <button @click="store.deletePost(post.id)">Удалить</button>
      <button 
        class="toggle-comments"
        @click="store.toggleComments(post.id)"
        :data-comments="post.isShow ? '' : `(${post.comments.length})`"
      >
        {{ post.isShow ? 'Скрыть комментарии' : 'Показать комментарии' }}
      </button>
      <CommentList v-if="post.isShow" :post="post" />
    </div>
  </template>
  
  <script>
  import { usePostsStore } from '../store/postsStore';
  import CommentList from './CommentList.vue';
  
  export default {
    props: ['post'],
    components: { CommentList },
    setup() {
      const store = usePostsStore();
      return { store };
    }
  };
  </script>