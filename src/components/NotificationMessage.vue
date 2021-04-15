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
        {{ header }}
      </div>
      <slot />
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NotificationMessage',
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

  computed: {
    ...mapState({
      hidden: 'hidden',
    }),
  },

  methods: {
    ...mapActions({
      hide: 'hideNotification',
    }),
  },
};
</script>

<style scoped>
.fade-leave-active {
 transition: opacity 0;
}

 .fade-leave-to {
  opacity: 0;
}
</style>
