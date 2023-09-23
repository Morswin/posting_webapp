<script setup lang="ts">
    const userStore = useUserStore();
</script>

<template>
    <div>
        Test {{ userStore.count }}
        <h1>H1 test</h1>
        <h2>H2 test</h2>
        <h3>H3 test</h3>
        <p>P test</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus debitis iusto neque necessitatibus sint magni quos, consequatur est repellat quidem, perferendis quisquam voluptatibus, eligendi nesciunt id? Sit, maiores reiciendis!</p>
    </div>
</template>