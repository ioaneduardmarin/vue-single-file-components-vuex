<template>
  <transition
    name="fade"
  >
    <div
      v-if="!hidden"
      class="ui message"
      :class="type"
    >
      <i
        class="close icon"
        @click="hide"
      />
      <div class="header">
        <p>{{ $t('messages.errorTitle') }}</p>
      </div>
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NotificationMessage',
  data() {
    this.$i18n.locale = 'en';
    return {
      locale: 'en',
      hidden: false };
  },
  props: {
    type: {
      type: String,
      default: 'info',
    },
    header: {
      type: String,
      default: 'Info',
    },
  },
  methods: {
    hide() {
      this.hidden = true;
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
 transition: opacity 0.5s;
}

 .fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
