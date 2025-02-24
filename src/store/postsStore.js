import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
        comments: [
          { id: 1, text: "Самый яркий комментарий в этом посте" },
          { id: 2, text: "Один из бессмысленных комментариев в этом посте" }
        ],
        isShow: false
      }
    ],
    editingPost: null
  }),
  actions: {
    addPost(title) {
      this.posts.push({ id: Date.now(), title, comments: [], isShow: false });
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    editPost(post) {
      this.editingPost = { ...post };
    },
    savePost(title) {
      const post = this.posts.find(p => p.id === this.editingPost.id);
      if (post) {
        post.title = title;
      }
      this.editingPost = null;
    },
    toggleComments(id) {
      const post = this.posts.find(post => post.id === id);
      if (post) post.isShow = !post.isShow;
    },
    addComment(postId, text) {
      const post = this.posts.find(post => post.id === postId);
      if (post) post.comments.push({ id: Date.now(), text });
    },
    deleteComment(postId, commentId) {
      const post = this.posts.find(post => post.id === postId);
      if (post) post.comments = post.comments.filter(c => c.id !== commentId);
    }
  }
});