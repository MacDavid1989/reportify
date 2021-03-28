<template>
    <div class="base-side-bar btn-group-vertical" role="group" aria-label="table view buttons">
        <base-button 
            v-for="(dataGroup,index) in dataGroups" 
            :key="index"
            :buttonName="dataGroup" 
            :disableButton="currentDataGroup===dataGroup"
            @click.native="$emit('selectedButton',dataGroup)" 
        ></base-button>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
    name: "BaseSideBar",
    props: {
        dataGroups: {
            type: Array
        },
        currentDataGroup: {
            type: String
        }
    },
    components: {
        BaseButton
    }
};
</script>

<style scoped>
.btn-group-vertical {
    justify-content: flex-start;
    padding: 24px 0 0;
}
.base-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 64px 0 0;
    border: none;
    border-radius: 5px;
    height: 48px;
    width: 125px;
    background-color: white;
}
.base-btn:hover {
    background-color: #e9ecef;
}
.base-btn:disabled {
    border-color: #0a58ca;
    background-color: #0b5ed7;
    color: #fff;
    cursor: auto;
}
.base-btn:disabled:hover {
    background-color: #0b5ed7;
}
</style>