<template>
    <div class="px-3 py-4">
        <div class="flex items-center text-gray-900">
            <img class="w-10 h-10 rounded-full" :src="content.image" alt="Jese image" />
            <p class="pl-3 truncate">{{ content.name }}</p>
        </div>
    </div>
</template>

<script setup>
const {content}=defineProps(['content'])
</script>
