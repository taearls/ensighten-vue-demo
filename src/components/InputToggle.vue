<template>
  <div class="toggle-container transition duration-800 ease-in">
    <input
      :id="id"
      type="checkbox"
      :checked="toggledOn"
      :name="id"
      class="toggle-checkbox"
      @click="toggledOn = !toggledOn"
    />
    <label :for="id" class="toggle-label" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggledOn: this.toggledProp,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    toggledProp: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.toggle-container {
  @apply relative inline-block w-10 h-auto mr-2 align-middle select-none;
}
.toggle-checkbox:checked {
  right: 0;
}
.toggle-checkbox {
  border: 2px solid #cbd5e0;
  right: 1.25rem;
  transition: right 0.4s ease;
  @apply absolute inline-block align-middle w-5 h-5 rounded-full bg-white appearance-none cursor-pointer;
}
.toggle-checkbox:focus {
  outline: none;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-purple-400;
}
.toggle-label {
  @apply block overflow-hidden h-5 rounded-full cursor-pointer;
  background-color: #cbd5e0;
}
</style>
