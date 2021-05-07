<template>
<div>
  <LanguageSelector />
  <NotificationMessage type="error"> SFC </NotificationMessage>
</div>
</template>

<script>
import NotificationMessage from '../components/NotificationMessage.vue';
import LanguageSelector from '../components/LanguageSelector.vue';

export default {
  components: { NotificationMessage, LanguageSelector },
};
</script>

<style>
</style>
