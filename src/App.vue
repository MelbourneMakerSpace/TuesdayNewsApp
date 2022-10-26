<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { article } from "./article";

import articles from "./data/articles";

let mouseover = ref('none');

</script>

<template>
  <header>
    <div>
      <nav class="flex gap-5 text-2xl">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  hovering: {{mouseover}}
  <div class="flex flex-col mb-10" v-for="a of articles">
    <div class="flex flex-col gap-1">
      <div class="flex justify-between bg-black text-white px-4 py-2">
        <span class="text-xl">{{ a.headline }}</span
        ><span>{{ a.authors.join(", ") }}</span>
      </div>
      <div class="text-center w-full relative overflow-hidden">
        <img :class="{dim:mouseover == a.headline}" 
        class="mx-auto" 
        :src="a.picture" />
        <div :class="{show:mouseover == a.headline, hide:mouseover != a.headline}" 
        @mouseenter="mouseover = a.headline"
        @mouseleave="mouseover = ''"
        class="px-5 py-2 absolute" 
        style="top:-10px; overflow-y:scroll;" >{{a.body}}</div>

      </div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.dim{
  opacity: .1;
}

.hide{
  opacity: 0;
}

.show{
  opacity: .9;
}


</style>
