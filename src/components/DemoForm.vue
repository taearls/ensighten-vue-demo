<template>
  <form
    id="contact"
    class="form-boxshadow mx-auto my-8 bg-gray-200 rounded-md w-full max-w-sm"
    method="POST"
    enctype="text/plain"
    @submit.prevent="submitEmail"
  >
    <fieldset class="px-4 py-2">
      <div>
        <label
          class="block text-left text-purple-700 font-bold mb-1 md:mb-0 pr-4"
          for="contactName"
        >
          Name<span class="font-black"> *</span>
        </label>
        <input
          id="contactName"
          v-model.trim="name.text"
          :style="$v.name.text.$error ? 'margin: 0' : ''"
          class="form-input w-full px-2 mb-2 rounded-md text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light"
          type="text"
          name="name"
          :placeholder="name.placeholder"
          @input="$v.name.text.$reset()"
          @blur="$v.name.text.$touch()"
        />
        <p v-if="$v.name.text.$error" class="text-left error-message">
          Please enter your name.
        </p>
      </div>

      <div class="flex flex-col" :class="{ 'mb-2': !$v.email.text.$error }">
        <label
          class="block text-left text-purple-700 font-bold mb-1 md:mb-0 pr-4"
          for="contactEmail"
        >
          Email<span class="font-black"> *</span>
        </label>
        <input
          id="contactEmail"
          v-model.trim="email.text"
          class="form-input w-full px-2 rounded-md text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light"
          type="email"
          name="email"
          required
          placeholder="beammeup@scotty.com"
          @input="$v.email.text.$reset()"
          @blur="$v.email.text.$touch()"
        />
        <p
          v-if="$v.email.text.$error && !$v.email.text.required"
          class="text-left error-message"
        >
          Please enter your email.
        </p>
        <p
          v-else-if="
            $v.email.text.$error && !$v.email.text.emailValidationRegex
          "
          class="text-left error-message"
        >
          Please enter a valid email address.
        </p>
      </div>

      <div>
        <label
          class="block text-left text-purple-700 font-bold mb-1 md:mb-0 pr-4"
          for="contactSubject"
          >Subject</label
        >
        <input
          id="contactSubject"
          v-model.trim="subject.text"
          class="form-input w-full px-2 mb-2 text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light rounded-md"
          type="text"
          name="subject"
          :placeholder="subject.placeholder"
        />
      </div>
      <div class="flex flex-col" :class="{ 'mb-4': !$v.message.text.$error }">
        <label
          class="block text-left text-purple-700 font-bold mb-1 md:mb-0 pr-4"
          for="contactMessage"
        >
          Message<span class="font-black"> *</span>
        </label>
        <textarea
          id="contactMessage"
          v-model.trim="message.text"
          class="form-textarea w-full h-32 text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light"
          name="message"
          required
          :placeholder="message.placeholder"
          @input="$v.message.text.$reset()"
          @blur="$v.message.text.$touch()"
        />
        <p
          v-if="$v.message.text.$error && !$v.message.text.required"
          class="text-left error-message"
        >
          Please enter a message.
        </p>
      </div>

      <div class="relative">
        <div class="flex items-center">
          <input
            type="submit"
            value="Send Email"
            :disabled="saveDisabled"
            class="inline-block my-2 text-white transition-colors transition-padding ease-in-out duration-200 bg-purple-700 rounded-lg px-2 disabled:pr-2 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:shadow-outline-light"
            :class="{ 'submit-hover': !saveDisabled && hoveringMessage }"
            @mouseover="hoveringMessage = !saveDisabled"
            @mouseleave="hoveringMessage = false"
          />
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
import {
  required,
  email as emailValidationRegex
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      hoveringMessage: false,
      name: {
        placeholder: "Captain Kirk",
        text: "",
      },
      email: {
        placeholder: "beammeup@scotty.com",
        text: "",
      },
      subject: {
        placeholder: "Captain's Log",
        text: "",
      },
      message: {
        placeholder:
          "Stardate 2713.5\n\nIn the distant reaches of our galaxy, we have made an astonishing discovery—Earth-type radio signals coming from a planet which apparently is an exact duplicate of the Earth.\n\nIt seems impossible, but there it is.",
        text: "",
      },
    };
  },
  validations: {
    name: {
      text: {
        required,
      },
    },
    email: {
      text: {
        required,
        emailValidationRegex,
      },
    },
    message: {
      text: {
        required,
      },
    },
  },
  computed: {
    saveDisabled() {
      return (
        !this.$v.name.text.required ||
        !this.$v.email.text.required ||
        !this.$v.email.text.emailValidationRegex ||
        !this.$v.message.text.required
      );
    },
    formBody() {
      return {
        name: this.name.text,
        email: this.email.text,
        subject: this.subject.text,
        message: this.message.text,
      };
    },
  },
  methods: {
    submitEmail() {
      this.$emit("form-submitted", this.formBody);
    },
  },
};
</script>

<style scoped>
.error-message {
  @apply text-red-700 font-semibold;
}
.success-message {
  @apply text-green-500 font-semibold;
}
.disabled {
  @apply cursor-not-allowed;
}
.submit-hover {
  @apply cursor-pointer;
}
.form-textarea {
  @apply appearance-none p-2 text-base leading-6 rounded-md;
}
.form-boxshadow {
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
</style>
