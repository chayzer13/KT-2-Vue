<template>
    <div class="comment-list">
      <CommentItem v-for="comment in post.comments" :key="comment.id" :comment="comment" :postId="post.id" />
      <CommentForm :postId="post.id" />
    </div>
  </template>
  
  <script>
  import CommentItem from './CommentItem.vue';
  import CommentForm from './CommentForm.vue';
  
  export default {
    props: ['post'],
    components: { CommentItem, CommentForm }
  };
  </script>