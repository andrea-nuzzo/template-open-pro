<template>
  <transition
    enter-active-class="transition ease-in-out duration-500 transform order-first"
    enter-from-class="opacity-0 scale-98"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition ease-out duration-300 transform absolute"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-98"
  >
    <div class="w-full">
      <article class="relative max-w-md mx-auto md:max-w-none">
        <figure class="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
          <img
            class="w-full h-full object-cover"
            :src="logo"
            width="516"
            height="387"
            alt="logo"
          />
        </figure>
        <div
          class="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl"
        >
          <h4 class="h4 mb-2">{{ title }}</h4>
          <p class="text-lg text-gray-400">
            {{ content }}
          </p>
        </div>
      </article>
    </div>
  </transition>
</template>
<script>
export default {
  name: "TabsQ",
  props: ["logo", "title", "content"],
};
</script>
