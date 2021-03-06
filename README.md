# Ensighten Vue Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/02fd2ca6-484e-46a6-9b82-41e2bdc892b0/deploy-status)](https://app.netlify.com/sites/ensighten-vue-demo/deploys)

The demo app is live on Netlify [here](https://ensighten-vue-demo.netlify.app).

## Overview
This app demonstrates core concepts of Vue 2. To learn more about the differences between Vue 2 and AngularJS, please refer to the Vue documentation's [official guide](https://vuejs.org/v2/guide/comparison.html#AngularJS-Angular-1).

## What This Demo Covers

With the code examples in the demo page, there are directives like `v-if`, `v-show`, `v-for`, and `v-model`. 

In terms of `v-for` I demonstrate how you can add and remove items from a simple list of food items. When you add `nachos` to the food list, you'll get a fun picture of Nacho Libre that is triggered with a `watch` function.

Further, I go over how `v-model` works with different input types, and how you can use a `computed` property to handle and cache a disabled state when applicable. 

You can also use a modifier like `v-model.trim` to eliminate trailing and leading whitespace from the input data. If you try adding whitespace in the input text field, it won't be stored in the data because this modifier is used. 

I also have a lifecycle demo component, which makes use of custom events to update data properties when lifecycle hooks are fired. You can show, hide, update, and reset the state of the lifecycle component to see how the lifecycle properties are affected.

To wrap things up with a more real-world example, I have a simple form, which, when you submit it, will output the form data onto the page. In production you can imagine that instead a post request would use this data as a payload. One notable Vue feature is that it implements a `@submit.prevent` modifier, which is the equivalent of `event.preventDefault()` to prevent the browser from refreshing.

This form again uses a `computed` property to handle the disabled / enabled state of the `Send Email` button. It also makes use of [Vuelidate](https://vuelidate.js.org) to implement custom validations, including required fields and checking the email address against a regular expression. With this validation logic, I'm able to manage the disabled state of the submit button and show error messages when they're appropriate.

I also added some trivial demonstrations of slots and scoped slots. These are pretty advanced concepts in the Vue world, and you won't necessarily encounter use cases for them often, but in those times they can be incredibly useful.

## What This Demo App Does NOT Cover

- [Vue 3](https://v3.vuejs.org/) - Once the Vue core team implements an official migration build from Vue 2 to Vue 3 and the larger ecosystem catches up, this will be more viable to use in production. This was only released in [September 2020](https://github.com/vuejs/vue-next/releases/tag/v3.0.0?ref=madewithvuejs.com), so it isn't as battle tested as Vue 2 which has been in production since [2016](https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8).
- [Nuxt](https://nuxtjs.org) - This provides server side rendering. Demonstrating this would make more sense as a separate demo app, because it significantly changes the way the app will be structured and configured.
- [Vuex](https://vuex.vuejs.org) - This is a global state solution, similar to React's Redux library. This seemed pretty advanced to include for people who are new to Vue. For production apps, this can be incredibly useful for storing global information like account information and an authentication state.
- [TypeScript integration](https://vuejs.org/v2/guide/typescript.html) - In Vue 2, this is notoriously difficult to implement because the codebase uses Facebook's Flow library for type annotations, which don't always map as expected to TypeScript. In short, this is much, much easier to achieve with Vue 3 because the codebase was completely rewritten in TypeScript.

## How the Demo App is Built

I scaffolded the initial configuration for this app using the [Vue CLI](https://cli.vuejs.org). This is akin to `create-react-app` in the React world, if you're familiar with that. One key difference, however, is the Vue CLI allows you to pick and choose features you'd like in your configuration as the CLI builds out a starter app for you. This makes it incredibly easy to get up and running quickly.

I also used [Tailwind](https://tailwindcss.com) to quickly style the app as I built it out. That's why you'll see a `postcss.config.js` and a `tailwind.config.js` file, and an awful lot of class names attached to the html elements. If anything, Tailwind also deserves its own brown bag if anyone is interested.

I also used Netlify to deploy this app. You'll notice a `netlify.toml` file which redirects all routes to the root `index.html` file. This allows us to use the [history mode](https://router.vuejs.org/guide/essentials/history-mode.html) in the Vue Router when deploying to Netlify without any bugs.

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

### Lints and checks for errors (runs on pre-commit)
```
npm run lint
```

### Lints and fixes files
```
npm run lintfix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config).
