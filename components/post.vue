<script setup lang="ts">
    interface Props {
        title: string
        content: string
    }
    const props = defineProps<Props>();
</script>

<template>
    <div>
        <h2>{{ props.title }}</h2>
        <p>{{ props.content }}</p>
    </div>
</template>