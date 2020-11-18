<template>
  <div class="px-16">

    <h1 class="font-bold text-2xl text-purple-600">Vue 2 Demo Page</h1>

    <!-- OVERVIEW -->
    <h2 class="font-bold text-xl text-purple-600 my-4">Overview</h2>
    <p>This page is designed as much as possible to be a one stop shop to highlight features of Vue 2. Relevant data properties are printed directly in the browser with semantic names to make this demo as visual as possible.</p>

    <hr class="mx-auto my-8 w-2/3" />

    <!-- VUE DIRECTIVES SECTION -->
    <h2 class="font-bold text-xl text-purple-600">Vue Directives</h2>
    <div class="my-4">
      <h3 class="font-bold text-lg text-purple-600 my-4">v-if</h3>
      <!-- receives payload as $event keyword from custom input-toggled event -->
      <input-toggle
        id="vIfInputToggle"
        :external-toggled-prop="vIfToggleProp"
        @input-toggled="vIfToggleProp = $event"
      />
      <pre>vIfToggleProp: {{ vIfToggleProp }}</pre>
      <transition-group name="toggleFade">
        <p v-if="vIfToggleProp" key="vIfTogglePropTrue">Now you see me</p>
        <p v-else key="vIfTogglePropFalse">Now I'm here instead</p>
      </transition-group>
    </div>

    <div class="my-4">
      <h3 class="font-bold text-lg text-purple-600 my-4">v-show</h3>
      <input-toggle
        id="vShowInputToggle"
        :external-toggled-prop="vShowToggleProp"
        @input-toggled="vShowToggleProp = $event"
      />
      <pre>vShowToggleProp: {{ vShowToggleProp }}</pre>
      <transition-group name="toggleFade">
        <p v-show="vShowToggleProp" key="vShowTogglePropTrue">Now I have display block.</p>
        <p v-show="!vShowToggleProp" key="vShowTogglePropFalse">
          Now I'm shown, and the original element has display none.
        </p>
      </transition-group>
    </div>

    <div class="my-4">
      <h3 class="font-bold text-lg text-purple-600 my-4">v-for</h3>
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
            class="button mx-2 focus:shadow-outline-light focus:outline-none"
            :key="'remove-food-' + index"
            @click="foodList.splice(index, 1)"
          >
            Remove Food
          </button>
        </div>
      </ul>
    </div>

    <div class="my-4">
      <h3 class="font-bold text-lg text-purple-600 my-4">v-model</h3>
      <pre>foodToAdd: "{{ foodToAdd }}"</pre>
      <input
        class="block mx-auto my-2 p-2 focus:shadow-outline-light focus:outline-none border border-gray-800 rounded-md"
        type="text"
        placeholder="Add a Food to the list!"
        v-model.trim="foodToAdd"
      />
      <!-- COMPUTED EXAMPLE -->
      <p class="my-2">
        A computed property determines if this button should be disabled or not.
        Once something is added to the
        <pre class="inline">foodToAdd</pre>
        property in the input above, this button will be enabled.
      </p>
      <pre>addFoodButtonDisabled: {{ addFoodButtonDisabled }}</pre>
      <button
        class="button add-food-button focus:shadow-outline-light focus:outline-none"
        @click="addFood(foodToAdd)"
        :disabled="addFoodButtonDisabled"
      >
        Add Food to List
      </button>
    </div>

    <!-- WATCH EXAMPLE -->
    <p class="my-2">If you add <pre class="inline">nachos</pre> to the <pre class="inline">foodList</pre>, a watcher will pick up on this and trigger a side effect.</p>
    <p class="my-2"><strong>NOTE:</strong> This example grabs an image that's committed in the demo projected. A less contrived use case for this might trigger an API call to request a payload in response to a user event.</p>

    <template v-if="imgSrc !== ''">
      <p class="font-bold uppercase">nachoooooo!</p>
      <img class="block mx-auto" :src="require(`@/assets/${imgSrc}`)" alt="nacho libre" />
    </template>

    <div class="flex flex-col my-4">
      <pre>selectedRadioInput: {{ selectedRadioInput || '""' }}</pre>

      <!-- you can also use v-for with a number range. it starts from 1 and includes the upper bound -->
      <label v-for="num in 4" :for="`radioOption${num}`" :key="`radioLabel${num}`">
        <input class="focus:shadow-outline-light focus:outline-none" :id="`radioOption${num}`" type="radio" name="radio-demo" :value="`Option ${num}`" v-model="selectedRadioInput" /> Option {{ num }}
      </label>
    </div>

    <div class="flex flex-col my-4">
      <pre>selectedDropdownInput: {{ selectedDropdownInput || '""' }}</pre>
      <select
        class="w-48 mx-auto my-2 px-2 py-1 border border-black rounded-md focus:shadow-outline-light focus:outline-none"
        v-model="selectedDropdownInput"
      >
        <option disabled value="">Please Select One</option>
        <option v-for="num in 4" :key="`dropdownLabel${num}`">
          Option {{ num }}
        </option>
      </select>
    </div>

    <hr class="mx-auto my-8 w-2/3" />

    <h2 class="font-bold text-xl text-purple-600 my-4">Lifecycle Demo</h2>
    <lifecycle-demo
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

    <button class="button block mx-auto my-2 focus:shadow-outline-light focus:outline-none" @click="isLifecycleComponentPresent = !isLifecycleComponentPresent">
      {{ isLifecycleComponentPresent ? "Hide Lifecycle Demo Component" : "Show Lifecycle Demo Component" }}
    </button>

    <!-- you can conditionally show a group of elements without adding additional html to the page by using a template tag -->
    <template v-if="isLifecycleComponentPresent">
      <button class="button block mx-auto my-2 focus:shadow-outline-light focus:outline-none" @click="isLifecycleComponentUpdated = true">
        Update Lifecycle Demo Component
      </button>
      <button class="button block mx-auto my-2 focus:shadow-outline-light focus:outline-none" @click="resetLifecycleComponent">
        Reset Lifecycle Demo Component
      </button>
    </template>

    <hr class="mx-auto my-8 w-2/3" />

    <!-- DEMO FORM SECTION -->
    <h2 class="font-bold text-xl text-purple-600 my-4">Demo Form</h2>
    <p class="p-2">
      This is a demo form I stole from my <a class="text-blue-500 underline rounded-sm focus:shadow-outline-light focus:outline-none" href="https://www.tylerearls.com/contact" target="_blank" rel="noreferrer">personal website</a> that implements a more advanced set of validation
      functions using
      <a
        class="text-blue-500 underline rounded-sm focus:shadow-outline-light focus:outline-none"
        href="https://vuelidate.js.org/"
        target="_blank"
        rel="noreferrer"
        >Vuelidate</a
      >, a Vue library that has advanced validation functions that's incredibly
      useful.
    </p>
    <p class="p-2">
      Required fields are notated with a
      <span class="font-black text-purple-600">*</span>.
    </p>
    <p class="p-2">
      When a blur event fires on those inputs, if there is no text in that
      field, an error message will appear.
    </p>
    <p class="p-2">
      For the email field, there is also a regular expression that it is
      validated against.
    </p>
    <p class="p-2">Once all the validations pass, the submit button will be enabled.</p>
    <pre class="p-2">submittedFormBody: {{ submittedFormBody }}</pre>
    <!-- receives payload as $event keyword from custom form-submitted event -->
    <demo-form @form-submitted="submittedFormBody = $event"/>

    <!-- SLOT EXAMPLE SECTION -->
    <h2 class="font-bold text-xl text-purple-600 my-4">Slot Demo</h2>

    <p class="p-2">This demo is so simple I included a code snippet of the component I'm using:</p>

    <pre>&lt;template&gt;</pre>
    <pre>&lt;button&gt;</pre>
    <pre>&lt;slot&gt;Default Content&lt;/slot&gt;</pre>
    <pre>&lt;/button&gt;</pre>
    <pre>&lt;/template&gt;</pre>

    <p class="p-2">Using slots, we can essentially pass HTML as a prop to a component. This is a unique Vue feature that's useful when we have reusable styles for a given component, but its content may change depending on where its used.</p>
    <p class="p-2">This is a very trivial example for demonstration, where the first button renders default content, and the second accepts the <pre class="inline">Custom Content</pre> string and renders that in its slot instead.</p>
    <p class="p-2">A good real-world use case for slots is for a blog, where you may have multiple slots (differentiated with a <pre class="inline">name</pre> property) for a header, a title, a footer, a thumbnail.</p>
    <submit-button class="button block mx-auto my-2 focus:shadow-outline-light focus:outline-none"></submit-button>
    <submit-button class="button block mx-auto my-2 focus:shadow-outline-light focus:outline-none">Custom Content passed into slot</submit-button>
  </div>
</template>

<script>
// @ is an alias for the src directory
import InputToggle from "@/components/InputToggle";
import DemoForm from "@/components/DemoForm";
import LifecycleDemo from "@/components/LifecycleDemo";
import SubmitButton from "@/components/SubmitButton";

export default {
  data() {
    return {
      vIfToggleProp: true,
      vShowToggleProp: true,
      foodList: ["🌮", "🍕", "🌭"],
      foodToAdd: "",
      selectedRadioInput: "",
      selectedDropdownInput: "",
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
    LifecycleDemo,
    SubmitButton,
  },
  computed: {
    addFoodButtonDisabled() {
      return this.foodToAdd === "";
    },
  },
  watch: {
    foodList: {
      // if I needed to compare the new value to the previous value, I can use the 2nd argument of the watch fn to access the old value
      handler: function(newValue, oldValue) {
        let isNachosIncluded = false;
        for (let i = 0; i < newValue.length; i++) {
          const item = newValue[i];
          if (item.toLowerCase() === "nachos") {
            isNachosIncluded = true;
            break;
          }
        }
        this.imgSrc = isNachosIncluded ? "nacho-libre.jpg" : "";
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

/* TRANSITIONS */
.toggleFade-enter-active {
  display: block;
  transition: opacity 0.2s ease-in;
}
.toggleFade-leave-active {
  display: none;
  transition: opacity 0.2s ease-out;
}
.toggleFade-enter,
.toggleFade-leave-to {
  opacity: 0;
}
</style>
