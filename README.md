# Ensighten Vue Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/02fd2ca6-484e-46a6-9b82-41e2bdc892b0/deploy-status)](https://app.netlify.com/sites/ensighten-vue-demo/deploys)

The demo app is live on Netlify [here](https://ensighten-vue-demo.netlify.app).

## Overview
This app demonstrates core concepts of Vue 2. With the code examples in the demo page, there are directives like `v-if`, `v-show`, `v-for`, and `v-model`. 

In terms of `v-for` I demonstrate how you can add and remove items from a simple list of food items. When you add `nachos` to the food list, you'll get a fun picture of Nacho Libre that is triggered with a `watch` function.

Further, I go over how `v-model` works with different input types, and how you can use a `computed` property to handle and cache a disabled state when applicable. 

You can also use a modifier like `v-model.trim` to eliminate trailing and leading whitespace from the input data. If you try adding whitespace in the input text field, it won't be stored in the data because this modifier is used. 

I also have a lifecycle demo component, which makes use of custom events to update data properties when lifecycle hooks are fired. You can show, hide, update, and reset the state of the lifecycle component to see how the lifecycle properties are affected.

To wrap things up in a more real-world example, I have a simple form, which when you submit it, will output the data onto the page. One notable feature is that it implements a `@submit.prevent` modifier, which is the equivalent of `event.preventDefault()` to prevent the browser from refreshing. 

This form again uses a `computed` property to handle the disabled / enabled state of the `Send Email` button. It also makes use of [Vuelidate](https://vuelidate.js.org) to implement custom validations, including required fields and checking the email address against a regular expression.

This app does NOT cover:
- [Vue 3](https://v3.vuejs.org/) - Once the Vue core team implements an official migration build from Vue 2 to Vue 3 and the larger ecosystem catches up, this will be more viable to use in production. This was only released in [September 2020](https://github.com/vuejs/vue-next/releases/tag/v3.0.0?ref=madewithvuejs.com), so it isn't as battle tested as Vue 2 which has been in production since [2016](https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8).
- [Nuxt](https://nuxtjs.org/) - This provides server side rendering. Demonstrating this would make more sense as a separate demo app, because it significantly changes the way the app will be structured and configured.
- [Vuex](https://vuex.vuejs.org/) - This is a global state solution, similar to React's Redux library. This seemed pretty advanced to include for people who are new to Vue. For production apps, this can be incredibly useful for storing global information like account information and an authentication state.
- [TypeScript integration](https://vuejs.org/v2/guide/typescript.html) - In Vue 2, this is notoriously difficult to implement because the codebase uses Facebook's Flow library for type annotations, which don't always map as expected to TypeScript. In short, this is much, much easier to achieve with Vue 3 because the codebase was completely rewritten in TypeScript.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
