<template>
  <div
    class="flex flex-col mx-auto my-4 justify-center items-center h-16 w-4/5 bg-gray-600 text-white rounded-md"
  >
    <slot :user="user">{{ user.firstName }}</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Tyler",
        lastName: "Earls",
      },
    };
  },
};
</script>
