<template>
    <div id="app" >
        <the-navigation-bar></the-navigation-bar>
        <breakdown-report></breakdown-report>
    </div>
</template>

<script>
import TheNavigationBar from './components/TheNavigationBar.vue'
import BreakdownReport from './components/BreakdownReport.vue'

export default {
    name: 'App',
    components: {
        TheNavigationBar,
        BreakdownReport
    }
}
</script>

<style>
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
