<template>
  <div>
    <h1>This is a demo page</h1>
    <input-toggle id="inputToggle" :external-toggled-prop="toggleProp" @input-toggled="toggleProp = $event" />
    <p v-if="toggleProp">Now you see me</p>
    <p v-else>Now I'm here instead</p>
  </div>
</template>

<script>
import InputToggle from "@/components/InputToggle";
export default {
  data() {
    return {
      toggleProp: true,
    };
  },
  components: {
    InputToggle,
  },
};
</script>
