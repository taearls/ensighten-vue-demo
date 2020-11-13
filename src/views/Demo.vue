<template>
  <div>
    <h1>This is a demo page</h1>

    <h2 class="text-lg font-bold">v-if</h2>
    <input-toggle id="vIfInputToggle" :external-toggled-prop="vIfToggleProp" @input-toggled="vIfToggleProp = $event" />
    <pre>vIfToggleProp: {{vIfToggleProp}}</pre>
    <p v-if="vIfToggleProp">Now you see me</p>
    <p v-else>Now I'm here instead</p>

    <!-- TODO: use containers instead of br elements -->
    <br/>

    <h2 class="text-lg font-bold">v-show</h2>
    <input-toggle id="vShowInputToggle" :external-toggled-prop="vShowToggleProp" @input-toggled="vShowToggleProp = $event" />
    <pre>vShowToggleProp: {{vShowToggleProp}}</pre>
    <p v-if="vShowToggleProp">Now I have display block.</p>
    <p v-else>Now I'm shown, and the other element has display none.</p>

    <br/>
    <h2 class="text-lg font-bold">v-for</h2>
    <ul>
      <div v-for="(food, index) in foodList" :key="'food-container-' + index" class="flex justify-center">
        <li :key="'food-' + index">
          {{ food }}
        </li>
        <button :key="'remove-food-' + index" @click="foodList.splice(index, 1)">Remove Food</button>
      </div>
    </ul>
  </div>
</template>

<script>
import InputToggle from "@/components/InputToggle";

const foodList = ["🌮", "🍕", "🌭"];

export default {
  data() {
    return {
      vIfToggleProp: true,
      vShowToggleProp: true,
      foodList,
    };
  },
  components: {
    InputToggle,
  },
};
</script>
