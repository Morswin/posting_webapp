<script setup lang="ts">
    const userStore = useUserStore();
</script>

<template>
    <div>
        <div v-if="userStore.get_post_length() > 0" >
            <Post 
                v-for="(item, index) in userStore.posts"
                :key="index"
                :title="item.title"
                :content="item.content"
            />
        </div>
        <div>
            <h2 class="ml-2">
                Create a new post:
            </h2>
            <form action="">
                <button @click.prevent="">
                    Post
                </button>
            </form>
        </div>
    </div>
</template>