<template>
    <nav class="navbar container">
        <div class="navbar-brand">
            <img 
                class="navbar-brand-logo" 
                width="40" 
                height="40" 
                src="../assets/logo.svg" 
                alt="reportify logo"
            >
            <span class="navbar-brand-title">
                reportify
            </span>
        </div>
        <div class="navbar-menu flex">
            <img 
                class="navbar-menu-settings" 
                width="25" 
                height="25" 
                src="../assets/cog.svg" 
                alt="settings icon"
            >
            <img 
                class="navbar-menu-user" 
                width="45" 
                height="45" 
                src="../assets/user.svg" 
                alt="user account icon"
            >
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TheNavigationBar'
}
</script>

<style>
.navbar-brand-title{
    margin: 0 0 0 8px;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    color: #535252;
}
.navbar-menu-settings {
    margin: 0 24px 0 0;
}
</style>