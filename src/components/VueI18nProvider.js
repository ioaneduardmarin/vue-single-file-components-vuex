import i18n from '../i18n/i18nInstance';

export default {
  data: () => ({
    i18n,
  }),
  render() {
    const slot = this.$scopedSlots.default({
      i18n: this.i18n,
    });
    return Array.isArray(slot) ? slot[0] : slot;
  },

  methods: {},
};
