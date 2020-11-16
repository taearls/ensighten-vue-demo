<template>
  <div class="px-8">
    <h1>
      This page is generated from the
      <a
        class="text-blue-500 underline"
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noreferrer"
        >Vue CLI</a
      >. I'm keeping this here for the purposes of this demo app, because it contains a lot of useful documentation links.
    </h1>
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
