<template>
  <div class="px-8">
    <!-- VUE DIRECTIVES -->
    <h2 class="font-bold text-xl text-purple-600">Vue Directives</h2>
    <div class="my-4">
      <h3 class="font-bold text-lg text-purple-600">v-if</h3>
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
      <h3 class="font-bold text-lg text-purple-600">v-show</h3>
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
      <h3 class="font-bold text-lg text-purple-600">v-for</h3>
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
      <h3 class="font-bold text-lg text-purple-600">v-model</h3>
      <pre>foodToAdd: "{{ foodToAdd }}"</pre>
      <input
        class="block mx-auto my-2 p-2 focus:shadow-outline focus:outline-none border border-gray-800 rounded-md"
        type="text"
        placeholder="Add a Food to the list!"
        v-model.trim="foodToAdd"
      />
      <!-- COMPUTED EXAMPLE -->
      <h3>
        A computed property determines if this button should be disabled or not.
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

    <!-- WATCH EXAMPLE -->
    <p>If you add <pre class="inline">nachos</pre> to the <pre class="inline">foodList</pre>, a watcher will pick up on this and trigger a side effect.</p>

    <template v-if="imgSrc !== ''">
      <p class="font-bold uppercase">nachoooooo!</p>
      <img class="block mx-auto" :src="require(`@/assets/${imgSrc}`)" alt="nacho libre" />
    </template>

    <hr class="mx-auto my-8 w-2/3" />

    <h2 class="font-bold text-xl text-purple-600">Lifecycle Demo</h2>
    <life-cycle-demo
      v-if="isLifecycleComponentPresent"
      :is-updated="isLifecycleComponentUpdated"
      @on-before-created="lifecycleListeners.onBeforeCreated = true"
      @on-created="lifecycleListeners.onCreated = true"
      @on-before-mounted="lifecycleListeners.onBeforeMounted = true"
      @on-mounted="lifecycleListeners.onMounted = true"
      @on-before-updated="lifecycleListeners.onBeforeUpdated = true"
      @on-updated="lifecycleListeners.onUpdated = true"
      @on-before-destroyed="lifecycleListeners.onBeforeDestroyed = true"
      @on-destroyed="lifecycleListeners.onDestroyed = true"
    />

    <pre>onBeforeCreated: {{ lifecycleListeners.onBeforeCreated }}</pre>
    <pre>onCreated: {{ lifecycleListeners.onCreated }}</pre>
    <pre>onBeforeMounted: {{ lifecycleListeners.onBeforeMounted }}</pre>
    <pre>onMounted: {{ lifecycleListeners.onMounted }}</pre>
    <pre>onBeforeUpdated: {{ lifecycleListeners.onBeforeUpdated }}</pre>
    <pre>onUpdated: {{ lifecycleListeners.onUpdated }}</pre>
    <pre>onBeforeDestroyed: {{ lifecycleListeners.onBeforeDestroyed }}</pre>
    <pre>onDestroyed: {{ lifecycleListeners.onDestroyed }}</pre>

    <button class="button block mx-auto my-2" @click="isLifecycleComponentPresent = !isLifecycleComponentPresent">
      {{ isLifecycleComponentPresent ? "Hide Lifecycle Demo Component" : "Show Lifecycle Demo Component" }}
    </button>

    <!-- you can conditionally show a group of elements without adding additional html to the page by using a template tag -->
    <template v-if="isLifecycleComponentPresent">
      <button class="button block mx-auto my-2" @click="isLifecycleComponentUpdated = true">
        Update Lifecycle Demo Component
      </button>
      <button class="button block mx-auto my-2" @click="resetLifecycleComponent">
        Reset Lifecycle Demo Component
      </button>
    </template>

    <hr class="mx-auto my-8 w-2/3" />

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
    <pre>submittedFormBody: {{ submittedFormBody }}</pre>
    <!-- receives payload as $event keyword from custom form-submitted event -->
    <demo-form @form-submitted="submittedFormBody = $event"/>

  </div>
</template>

<script>
import InputToggle from "@/components/InputToggle";
import DemoForm from "@/components/DemoForm";
import LifeCycleDemo from "@/components/LifeCycleDemo";

const foodList = ["🌮", "🍕", "🌭"];

export default {
  data() {
    return {
      vIfToggleProp: true,
      vShowToggleProp: true,
      foodList,
      foodToAdd: "",
      submittedFormBody: {},
      imgSrc: "",
      isLifecycleComponentPresent: true,
      isLifecycleComponentUpdated: false,
      lifecycleListeners: {
        onBeforeCreated: false,
        onCreated: false,
        onBeforeMounted: false,
        onMounted: false,
        onBeforeUpdated: false,
        onUpdated: false,
        onBeforeDestroyed: false,
        onDestroyed: false,
      },
    };
  },
  components: {
    InputToggle,
    DemoForm,
    LifeCycleDemo,
  },
  computed: {
    addFoodButtonDisabled() {
      return this.foodToAdd === "";
    },
  },
  watch: {
    foodList: {
      handler: function(val, oldVal) {
        let nachoIsIncluded = false;
        for (let i = 0; i < val.length; i++) {
          const item = val[i];
          if (item.includes("nacho")) {
            nachoIsIncluded = true;
            break;
          }
        }
        this.imgSrc = nachoIsIncluded ? "nacho-libre.jpg" : "";
      },
      deep: true,
    },
  },
  methods: {
    addFood(foodToAdd) {
      // we have to replace the array rather than mutate so we can watch it
      // if we mutate the array, the oldValue and the newValue will be the same
      this.foodList = [...this.foodList, foodToAdd];

      // clear input after use
      this.foodToAdd = "";
    },
    resetLifecycleComponent() {
      this.isLifecycleComponentPresent = true;
      this.isLifecycleComponentUpdated = false;
      for (const lifecycleProp in this.lifecycleListeners) {
        // $nextTick makes sure the callback it wraps is called at the end of the hydration cycle
        // this helps here so that the onBeforeUpdated and onUpdated properties get set to false
        // otherwise, the component technically updates, so it may not show as true otherwise
        this.$nextTick(() => {
          this.lifecycleListeners[lifecycleProp] = false;
        });
      }
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
