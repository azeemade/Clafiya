<template>
    <div class="mx-8 mt-6">
        <Navbar />
        <Card />
        <Chart />
        <ActivityCard />
    </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Card from "./Card.vue";
import ActivityCard from "./ActivityCard.vue";
import Chart from "./Chart.vue";
export default {
    name: "Main",
    components: { Navbar, Card, ActivityCard, Chart }
}
</script>