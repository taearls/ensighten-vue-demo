<template>
  <div>
    <h1>This is a demo page</h1>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-if</h2>
      <input-toggle id="vIfInputToggle" :external-toggled-prop="vIfToggleProp" @input-toggled="vIfToggleProp = $event" />
      <pre>vIfToggleProp: {{ vIfToggleProp }}</pre>
      <p v-if="vIfToggleProp">Now you see me</p>
      <p v-else>Now I'm here instead</p>
    </div>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-show</h2>
      <input-toggle id="vShowInputToggle" :external-toggled-prop="vShowToggleProp" @input-toggled="vShowToggleProp = $event" />
      <pre>vShowToggleProp: {{ vShowToggleProp }}</pre>
      <p v-if="vShowToggleProp">Now I have display block.</p>
      <p v-else>Now I'm shown, and the other element has display none.</p>
    </div>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-for</h2>
      <pre>foodList: {{ foodList }}</pre>
      <ul>
        <div v-for="(food, index) in foodList" :key="'food-container-' + index" class="flex justify-center">
          <li :key="'food-' + index">
            {{ food }}
          </li>
          <button class="ml-2" :key="'remove-food-' + index" @click="foodList.splice(index, 1)">Remove Food</button>
        </div>
      </ul>

    </div>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-model</h2>
      <pre>foodToAdd: "{{ foodToAdd }}"</pre>
      <input class="block mx-auto focus:shadow-outline focus:outline-none border border-gray-800 rounded-md" type="text" placeholder="Add a Food to the list!" v-model.trim="foodToAdd">
      <button class="add-food-button" @click="foodList.push(foodToAdd)" :disabled="foodToAdd === ''">Add Food to List</button>
    </div>
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
      foodToAdd: "",
    };
  },
  components: {
    InputToggle,
  },
};
</script>

<style scoped>
.add-food-button:disabled {
  cursor: not-allowed;
  opacity: 75%;
}
</style>
