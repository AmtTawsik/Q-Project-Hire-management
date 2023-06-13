<template>
    <div :class="`flex justify-between bg-gray-100 px-4 py-3 rounded-md border-t-4 ${border}`">
        <h4 class="font-semibold capitalize">{{ title }}</h4>
        <span class="font-semibold">{{ count }}</span>
    </div>
</template>
  
<script setup>
const { border, title, count } = defineProps(['border', 'title', 'count']);
</script>