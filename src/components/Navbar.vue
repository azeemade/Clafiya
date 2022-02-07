<template>
    <div class="flex justify-between items-baseline">
        <div class="group relative">
            <i class="icofont-search-1 absolute left-3 top-1/2 -mt-2.5 text-cacccf pointer-events-none" aria-hidden="true"></i>
            <input type="text" class="rounded-3xl h-10 w-80 py-2 pl-10" placeholder="Search">
        </div>
        
        <div class="flex items-center">
            <div class="mr-7 inline-block relative">
                <i class="icofont-notification text-cacccf text-2xl"></i>
                <span class="absolute top-0 right-0 inline-flex items-center text-white justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-red rounded-full">9</span>
            </div>
            <div>
                <img src="../assets/avatar/16.png" alt="man" class="rounded-full border-e8e8e8 border-4">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navbar"
}
</script>