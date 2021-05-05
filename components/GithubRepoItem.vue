<template>
  <div class="ui items">
  <div class="item">
    <div class="image">
     <img :src="repo.owner.avatar_url">
    </div>
    <div class="content">
      <a
      :href="`${repo.html_url}`"
       class="header">{{repo.name}}</a>
      <div class="description">
        <p>{{$t('messages.repoDescription')}} {{repo.description}}</p>
      </div>
      <div class="createdAt">
        <span>{{$t('messages.repoCreatedAtText')}} {{ repo.created_at }}</span>

      </div>
      <div class="createdAt">
        <span>{{$t('messages.repoOwner')}}
          <a :href="`${repo.owner.html_url}`">
          {{ repo.owner.login }}
          </a>
       </span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'GithubRepoItem',
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.content{
  text-align: left;
}
</style>
