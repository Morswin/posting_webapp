<script setup lang="ts">
    const userStore = useUserStore();
</script>

<template>
    <div>
        <h1>{{ userStore.count }}</h1>
    </div>
</template>