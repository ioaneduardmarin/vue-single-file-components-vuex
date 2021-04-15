<template>
  <div class="ui card">
    <div class="image">
      <img :src="user.avatar_url">
    </div>
    <div class="content">
      <a
        :href="`https://github.com/${user.login}`"
        class="header"
      >{{ user.name }}</a>
      <div class="meta">
        <span class="date">Joined in {{ user.created_at }}</span>
      </div>
      <div class="description">
        {{ user.bio }}
      </div>
    </div>
    <div class="extra content">
      <a :href="`https://github.com/${user.login}?tab=followers`">
        <i class="user icon" />
        {{ user.followers }} Friends
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GithubUserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
