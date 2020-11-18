<template>
  <div class="px-8">
    <p class="p-2">
      This page is generated from the
      <a
        class="text-blue-500 underline rounded-sm focus:shadow-outline-light focus:outline-none"
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noreferrer"
        >Vue CLI</a
      >. I'm keeping this here for the purposes of this demo app, because it
      contains a lot of useful documentation links.
    </p>
    <p class="p-2">
      If you're interested in looking at the source code and how this demo app
      is built, you can check out the Github repository
      <a
        class="text-blue-500 underline rounded-sm focus:shadow-outline-light focus:outline-none"
        href="https://github.com/taearls/ensighten-vue-demo"
        target="_blank"
        rel="noreferrer"
        >here</a
      >.
    </p>
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
