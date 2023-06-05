<template>
    <div class="px-3 py-4">
        <div class="flex items-center">
            <button class="flex items-center gap-1">
                <span class="text-black">{{ content.state }}</span>
                <ChevronDownIcon class="w-4 h-4 font-semibold text-black" />
            </button>
        </div>

        <div v-if="content.value <= 6" class="flex items-center gap-1 mt-1">
            <div v-for="n in content.value" :key="n"
                :class="`${content.color} w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`">
                {{ n }}
            </div>

            <div v-for="n in 6 - content.value" :key="n"
                class="flex items-center justify-center text-sm font-medium text-white bg-gray-200 rounded-sm w-7">
                &nbsp;
            </div>
        </div>
    </div>
</template>

<script setup>
import {  ChevronDownIcon} from '@heroicons/vue/24/solid'
const {content}=defineProps(['content'])
</script>
