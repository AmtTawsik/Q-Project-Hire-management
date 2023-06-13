<template>
    <div class="flex items-center px-3 py-5 text-gray-900 w-[170px] truncate">
        <p class="pl-3 truncate">{{ content }}</p>
    </div>
</template>

<script setup>
const {content}=defineProps(['content'])
</script>
