<template>
    <div class="card-shadow rounded-lg mb-32 mt-7 bg-white">
        <p class="p-6 font-bold text-xl text-25282b">Appointment Activity</p>
        <div>
            <table style="width:100%">
                <tr class="bg-e8e8e8 border border-dbdde0 text-25282b">
                    <th class="pl-6">Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Visit Time</th>
                    <th>CHWs</th>
                    <th>Plans</th>
                    <th></th>
                </tr>
                <tr v-for="item, index in data" :key="index" class="border border-e8e8e8 text-dark-gray">
                    <td class="flex pl-6 items-center">
                        <img :src="require('../assets/avatar/'+item.avatar+'.png')" :alt="item.avatar" class="mr-3">
                        {{item.name}}
                    </td>
                    <td>{{item.email}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.chws}}</td>
                    <td>{{item.plans}}</td>
                    <td>
                        <i class="icofont-ui-edit mr-4 text-gray"></i>
                        <i class="icofont-bin text-red"></i>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ActivityCard',
    data(){
        return{
            data: [
                {
                    avatar: '011',
                    name: 'Babangida Fox',
                    email: 'babgindafox@example.com',
                    date: '10/10/2020',
                    time: '09:15-09:45am',
                    chws: 'Blessing Chidi',
                    plans: 'BASIC'
                },
                {
                    avatar: '01',
                    name: 'Jennie Johnson',
                    email: 'jenniejohnson@example.com',
                    date: '10/12/2020',
                    time: '12:00-12:45pm',
                    chws: 'Esther Lucky',
                    plans: 'FAMILY'
                },
                {
                    avatar: '022',
                    name: 'Lucky Willams',
                    email: 'luckywilliam@example.com',
                    date: '10/13/2020',
                    time: '01:15-01:45pm',
                    chws: 'Blessing Chidi',
                    plans: 'BASIC'
                },
                {
                    avatar: '02',
                    name: 'Blessing Wilsom',
                    email: 'blessingwilliam@gmail.com',
                    date: '10/14/2020',
                    time: '02:00-02:45pm',
                    chws: 'Esther Lucky',
                    plans: 'FAMILY'
                },
                {
                    avatar: '03',
                    name: 'Purest Meion',
                    email: 'purestmeion@example.com',
                    date: '10/15/2020',
                    time: '12:00-12:45pm',
                    chws: 'Blessing Chidi',
                    plans: 'BASIC'
                },
            ]
        }
    }
}
</script>
<style>
    td, th{
        font-size: 14px;
        padding: 18px 0px;
        text-align: start;
    }
</style>