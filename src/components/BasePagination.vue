<template>
    <div class="base-pagination">
        <div class="base-pagination-buttons pagination justify-content-end">
            <base-button
                @click.native="$emit('newPageNumber',1)" 
                :disableButton="currentPageNumber === 1" 
                class="pagination-button page-link" 
                aria-label="first page"
            >
                <span aria-hidden="true">
                    &laquo;
                </span>
            </base-button>
            <base-button
                @click.native="$emit('newPageNumber',(currentPageNumber - 1))" 
                :disableButton="currentPageNumber === 1" 
                class="pagination-button page-link" 
                aria-label="previous page"
            >
                <span aria-hidden="true">
                    &lsaquo;
                </span>
            </base-button>
            <span v-for="(item, index) in new Array(numberOfPages)" :key="index"> 
                <base-button
                    @click.native="$emit('newPageNumber',(index + 1))" 
                    :buttonName="index + 1" 
                    :class="['pagination-button page-link',currentPageNumber === (index + 1) ? 'pagination-button-active' : '']"
                ></base-button>
            </span>
            <base-button 
                @click.native="$emit('newPageNumber',(currentPageNumber + 1))" 
                :disableButton="currentPageNumber === numberOfPages" 
                class="pagination-button page-link" 
                aria-label="next page"
            >
                <span aria-hidden="true">
                    &rsaquo;
                </span>
            </base-button>
            <base-button 
                @click.native="$emit('newPageNumber',numberOfPages)" 
                :disableButton="currentPageNumber === numberOfPages" 
                class="pagination-button page-link" 
                aria-label="last page"
            >
                <span aria-hidden="true">
                    &raquo;
                </span>
            </base-button>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
    name: "BasePagination",
    props: {
        numberOfPages: {
            type: Number
        },
        currentPageNumber: {
            type: Number
        }
    },
    components: {
        BaseButton
    }
}
</script>

<style scoped>
.base-pagination-buttons {
  margin: 24px 96px 0 0;
  height: 50px;
}
.pagination-button {
  border: none;
  height: 50px;
  color: black;
}
.pagination-button:disabled {
  color: gray;  
}
.pagination-button-active {
  border-radius: 6px;
  background-color: #0b5ed7;
  color: white;
  cursor: auto;
}
</style>