<template>
  <div class="px-8">
    <!-- VUE DIRECTIVES -->
    <h2 class="font-bold text-xl text-purple-600">Vue Directives</h2>
    <div class="my-4">
      <h2 class="text-lg font-bold">v-if</h2>
      <!-- receives payload as $event keyword from custom input-toggled event -->
      <input-toggle
        id="vIfInputToggle"
        :external-toggled-prop="vIfToggleProp"
        @input-toggled="vIfToggleProp = $event"
      />
      <pre>vIfToggleProp: {{ vIfToggleProp }}</pre>
      <p v-if="vIfToggleProp">Now you see me</p>
      <p v-else>Now I'm here instead</p>
    </div>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-show</h2>
      <input-toggle
        id="vShowInputToggle"
        :external-toggled-prop="vShowToggleProp"
        @input-toggled="vShowToggleProp = $event"
      />
      <pre>vShowToggleProp: {{ vShowToggleProp }}</pre>
      <p v-show="vShowToggleProp">Now I have display block.</p>
      <p v-show="!vShowToggleProp">
        Now I'm shown, and the original element has display none.
      </p>
    </div>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-for</h2>
      <pre>foodList: {{ foodList }}</pre>
      <ul>
        <div
          v-for="(food, index) in foodList"
          :key="'food-container-' + index"
          class="flex justify-center items-center my-2"
        >
          <li :key="'food-' + index">
            {{ food }}
          </li>
          <button
            class="button mx-2"
            :key="'remove-food-' + index"
            @click="foodList.splice(index, 1)"
          >
            Remove Food
          </button>
        </div>
      </ul>
    </div>

    <div class="my-4">
      <h2 class="text-lg font-bold">v-model</h2>
      <pre>foodToAdd: "{{ foodToAdd }}"</pre>
      <input
        class="block mx-auto my-2 p-2 focus:shadow-outline focus:outline-none border border-gray-800 rounded-md"
        type="text"
        placeholder="Add a Food to the list!"
        v-model.trim="foodToAdd"
      />
      <h3>
        Computed Property to determine if this button should be disabled or not.
        Once something is added to the
        <pre class="inline">foodToAdd</pre>
        property in the input above, this button will be enabled.
      </h3>
      <pre>addFoodButtonDisabled: {{ addFoodButtonDisabled }}</pre>
      <button
        class="button add-food-button"
        @click="addFood(foodToAdd)"
        :disabled="addFoodButtonDisabled"
      >
        Add Food to List
      </button>
    </div>

    <!-- DEMO FORM -->
    <h2 class="font-bold text-xl text-purple-600">Demo Form</h2>
    <p>
      This is a demo form I stole from my personal website that implements a more advanced set of validation
      functions using
      <a
        class="text-blue-500 underline"
        href="https://vuelidate.js.org/"
        target="_blank"
        rel="noreferrer"
        >Vuelidate</a
      >, a Vue library that has advanced validation functions that's incredibly
      useful.
    </p>
    <p>
      Required fields are notated with a
      <span class="font-black text-purple-600">*</span>.
    </p>
    <p>
      When a blur event fires on those inputs, if there is no text in that
      field, an error message will appear.
    </p>
    <p>
      For the email field, there is also a regular expression that it is
      validated against.
    </p>
    <p>Once all the validations pass, the submit button will be enabled.</p>
    <pre>formBody: {{ formBody }}</pre>
    <!-- receives payload as $event keyword from custom form-submitted event -->
    <demo-form @form-submitted="formBody = $event"/>
  </div>
</template>

<script>
import InputToggle from "@/components/InputToggle";
import DemoForm from "@/components/DemoForm";

const foodList = ["🌮", "🍕", "🌭"];

export default {
  data() {
    return {
      vIfToggleProp: true,
      vShowToggleProp: true,
      foodList,
      foodToAdd: "",
      formBody: {},
    };
  },
  components: {
    InputToggle,
    DemoForm,
  },
  computed: {
    addFoodButtonDisabled() {
      return this.foodToAdd === "";
    },
  },
  methods: {
    addFood(foodToAdd) {
      this.foodList.push(foodToAdd);
      // clear input after use
      this.foodToAdd = "";
    },
  },
};
</script>

<style scoped>
pre {
  @apply whitespace-normal;
}
.add-food-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.button {
  @apply text-black bg-gray-300 px-4 py-2 rounded-md;
}
</style>
