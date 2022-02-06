<template>
    <div class="mt-6">
        <Logo  class="mx-6"/>

        <div class="mt-20 grid">
            <router-link to="/" class="mx-6 mb-6 font-bold text-dark-gray">
                <i class="icofont-pie-chart text-0a459f mr-3"></i>
                Dashboard
            </router-link>
            <router-link to="/other" class="mx-6 mb-6 font-bold text-dark-gray">
                <i class="icofont-stethoscope text-light-gray mr-3"></i>
                Appointment
            </router-link>
            <router-link to="/other" class="mx-6 mb-6 font-bold text-dark-gray">
                <i class="icofont-doctor text-light-gray mr-3"></i>
                Health Workers
            </router-link>
            <router-link to="/other" class="mx-6 mb-6 font-bold text-dark-gray">
                <i class="icofont-nurse text-light-gray mr-3"></i>
                Departments
            </router-link>
            <router-link to="/other" class="mx-6 mb-6 font-bold text-dark-gray">
                <i class="icofont-wheelchair text-light-gray mr-3"></i>
                Patients
            </router-link>
            <router-link to="/other" class="mx-6 font-bold text-dark-gray">
                <i class="icofont-credit-card text-light-gray mr-3"></i>
                Payments
            </router-link>
            <hr class="my-5 text-e8e8e8">
            <router-link to="/other" class="mx-6 font-bold text-dark-gray">
                <i class="icofont-question-circle text-light-gray mr-3"></i>
                Help
            </router-link>
        </div>
    </div>
</template>
<script>
import Logo from "./Logo.vue";
export default {
    name: "Sidebar",
    components: { Logo }
}
</script>