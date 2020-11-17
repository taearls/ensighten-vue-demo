<template>
  <div>
    <p>this is just a placeholder</p>
    <p v-if="isUpdated">I've been updated!</p>
    <p v-else>I haven't been updated yet...</p>
  </div>
</template>

<script>
export default {
  props: {
    isUpdated: {
      type: Boolean,
      required: true,
    },
  },
  beforeCreate() {
    this.$emit("on-before-created");
  },
  created() {
    this.$emit("on-created");
  },
  beforeMount() {
    this.$emit("on-before-mounted");
  },
  mounted() {
    this.$emit("on-mounted");
  },
  beforeUpdate() {
    console.log("updated");
    this.$emit("on-before-updated");
  },
  updated() {
    this.$emit("on-updated");
  },
  beforeDestroy() {
    this.$emit("on-before-destroyed");
  },
  destroyed() {
    this.$emit("on-destroyed");
  },
};
</script>
