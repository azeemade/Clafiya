<template>
    <div class="mt-8 flex justify-between">
        <div v-for="item,index in data" :key="index" class="p-6 bg-white rounded-lg card-shadow flex">
            <div class="mr-7">
                <i :class="item.icon" class="text-4xl text-0a459f"></i>
            </div>
            <div>
                <p class="font-bold text-25282b">{{item.title}}</p>
                <p class="text-lg text-0a459f">{{item.figure}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card',
    data(){
        return{
            data: [
                {
                    title: 'Appointments',
                    icon: 'icofont-first-aid-alt',
                    figure: 213
                },
                {
                    title: 'New Patients',
                    icon: 'icofont-crutch',
                    figure: 104
                },
                {
                    title: 'Interventions',
                    icon: 'icofont-operation-theater',
                    figure: 24
                },
                {
                    title: "Clafiya's Earnings",
                    icon: 'icofont-bank',
                    figure: '$ 112,174'
                }
            ]
        }
    }
}
</script>
<style>
    .card-shadow{
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    }
</style>