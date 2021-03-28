<template>
    <button 
        :disabled="disableButton" 
        type="button" 
        class="base-btn"
    >
        {{ buttonName }}
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        disableButton: {
            type: Boolean
        },
        buttonName: {
            type: [String,Number]
        }
    }
}
</script>