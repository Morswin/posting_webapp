<script setup lang="ts">
    const userStore = useUserStore();
</script>


<template>
    <div>
        <nav class="flex" v-if="userStore.logged_in">
            <NuxtLink class="mx-2" to="/">
                <h3>
                    Main page
                </h3>
            </NuxtLink>
            <NuxtLink class="mx-2" to="/posts">
                <h3>
                    Posts
                </h3>
            </NuxtLink>
            <NuxtLink class="mx-2" to="/profile">
                <h3>
                    Profile
                </h3>
            </NuxtLink>
            <button class="mx-2" @click="userStore.log_out()">
                <h3>
                    Logout
                </h3>
            </button>
            <h3 class="mx-2">
                You are logged as: {{ userStore.name }}
            </h3>
        </nav>
        <nav v-else class="flex"> 
            <NuxtLink class="mx-2" to="/">
                <h3>
                    Main page
                </h3>
            </NuxtLink>
            <h3>Log in to to navigate around the website</h3>
        </nav>
    </div>
</template>