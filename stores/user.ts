export const useUserStore = defineStore('user', () => {
    const name = ref<string>("");
    const logged_in = ref<boolean>(false);
    const profile_pic = ref<string>("");

    function log_in(user_name: string): void {
        console.log(`Logging in as ${user_name}`);
        logged_in.value = true;
        name.value = user_name;
    };
    function log_out(): void {
        console.log(`Logging out`);
        logged_in.value = false;
        name.value = "";
    };

    return { name, logged_in, log_in, log_out, profile_pic }
})

