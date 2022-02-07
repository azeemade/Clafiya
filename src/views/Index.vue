<template>
    <div class="grid grid-cols-6 gap-4">
        <div>
            <Sidebar />
        </div>
        <div class="col-span-5 bg-background">
            <Main />
        </div>
    </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Main from "../components/Main.vue";
export default {
    name: "Index",
    components: { Sidebar, Main }
}
</script>