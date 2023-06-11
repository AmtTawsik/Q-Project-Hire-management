<template>
    <div class="flex items-center px-3 py-5 text-gray-900 w-[170px] truncate">
        <img class="w-10 h-10 rounded-full" :src="content.image" alt="Jese image" />

        <p class="pl-3 truncate">{{ content.name }}</p>
    </div>
</template>

<script setup>
const {content}=defineProps(['content'])
</script>

<style lang="scss" scoped></style>