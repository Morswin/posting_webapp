export const useUserStore = defineStore('user', () => {
    const name = ref<string>("");
    const count = ref<number>(0);

    return {name}
})

