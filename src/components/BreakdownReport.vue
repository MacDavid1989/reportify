<template>
    <div class="breakdown-report container">
        <h4 class="breakdown-report-title">
            Breakdown Report
        </h4>
        <div class="breakdown-report-wrapper">
            <breakdown-report-side-bar 
                @selectedButton="updateClientGroup" 
                :currentDataGroup="currentClientGroup"
                :dataGroups="clientGroups"
            ></breakdown-report-side-bar>
            <base-table 
                @columnSortButton="sortColumn"
                :tableHeadings="tableHeadings"
                :rowsPerPage="rowsPerPage"
                :dataKeyNames="clientKeyNames"
            ></base-table>
        </div>
        <breakdown-report-pagination 
            @newPageNumber="updatePageNumber" 
            :numberOfPages="numberOfPages"
            :currentPageNumber="currentPageNumber"
        ></breakdown-report-pagination>
    </div>
</template>

<script>
import BreakdownReportSideBar from './BaseSideBar.vue'
import BaseTable from './BaseTable.vue'
import BreakdownReportPagination from './BasePagination.vue'

import { mapActions, mapGetters } from 'vuex'

import sortFunction from '../utils/sortFunction'

export default {
    name: 'BreakdownReport',
    data: () => {
        return {
            currentClientGroup: 'Advocates',
            clientGroups: ['Advocates','Friends'],
            tableHeadings: ['Name','Coupons Earned','Coupons Redemeed','Sales Revenue'],
            currentPageNumber: 1,
            rowsToDisplay: 4,
            clientKeyName: ""
        }
    },
    computed: {
        ...mapGetters({ 
            getClients:'getClients' 
        }),
        rowsPerPage() {
            return this.getClients.slice((this.currentPageNumber*this.rowsToDisplay-this.rowsToDisplay),(this.currentPageNumber*this.rowsToDisplay));
        },
        clientKeyNames() {
            return Object.keys(this.getClients[0]).filter(value=>value!=='id')
        },
        numberOfPages() {
            return Math.ceil(this.getClients.length / this.rowsToDisplay)
        }
    },
    methods: {
        ...mapActions({ 
            fetchAdvocates:'fetchAdvocates',
            fetchFriends:'fetchFriends' 
        }),
        updateClientGroup(newClientGroup) {
            this.currentClientGroup = newClientGroup;
            newClientGroup === 'Advocates' ? this.fetchAdvocates() : this.fetchFriends();
        },
        sortColumn(newClientKeyName) {
            sortFunction(newClientKeyName,this.clientKeyName,this.getClients);
            this.clientKeyName = newClientKeyName;
        },
        updatePageNumber(newPageNumber) {
            this.currentPageNumber = newPageNumber;
        }
    },
    created() {
        this.fetchAdvocates();
    },
    components: {
        BreakdownReportSideBar,
        BreakdownReportPagination,
        BaseTable
    }
}  
</script>

<style scoped>
.breakdown-report-title {
  margin: 48px 0 24px;
}
.breakdown-report-wrapper {
  display: flex;
}
</style>