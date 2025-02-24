<template>
  <div class="post-list">
    <PostForm />
    <PostItem v-for="post in store.posts" :key="post.id" :post="post" />
    <Modal v-if="store.editingPost" />
  </div>
</template>

<script>
import { usePostsStore } from '../store/postsStore';
import PostItem from './PostItem.vue';
import PostForm from './PostForm.vue';
import Modal from './Modal.vue';

export default {
  components: { PostItem, PostForm, Modal },
  setup() {
    const store = usePostsStore();
    return { store };
  }
};
</script>