<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input-toggle id="inputToggle" :toggled-prop="toggleProp" />
  </div>
</template>

<script>
import InputToggle from "@/components/InputToggle";
export default {
  data() {
    return {
      toggleProp: false,
    };
  },
  components: {
    InputToggle,
  },
};
</script>
