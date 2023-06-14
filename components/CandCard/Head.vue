<template>
    <div :class="`flex justify-between bg-gray-100 px-4 py-3 rounded-md border-t-4 ${borderMap.get(title)}`">
        <h4 class="font-semibold capitalize">{{ title }}</h4>
        <span class="font-semibold">{{ count }}</span>
    </div>
</template>
  
<script setup>
const borderMap=new Map([
    ['Screening','border-t-green-800'],
    ['New Applied','border-t-emerald-400'],
    ['Design Challange','border-t-orange-400'],
    ['Interview','border-t-violet-400']
])
const { border, title, count } = defineProps(['border', 'title', 'count']);
</script>