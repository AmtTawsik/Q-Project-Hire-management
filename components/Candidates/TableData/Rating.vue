<template>
    <div class="px-3 py-4">
        <button
        class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
      >
        <SolidStartIcon v-if="content > 0" class="w-4 h-4 text-yellow-300" />
        <StarIcon v-else class="w-4 h-4 text-gray-300" />
        <span
          :class="`${
            content > 0 ? 'text-gray-800 font-semibold' : 'text-gray-500'
          } text-sm`"
          >{{ content }}.0</span
        >
      </button>
    </div>
</template>

<script setup>
import {  StarIcon as SolidStartIcon } from '@heroicons/vue/24/solid'
import { StarIcon } from '@heroicons/vue/24/outline';
const {content}=defineProps(['content'])
</script>
