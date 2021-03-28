<template>
    <table class="base-table table">
        <thead>
            <tr>
                <th v-for="(heading,index) in tableHeadings" :key="index" scope="col">
                    <div class="base-table-heading">
                        <span>
                            {{ heading }}
                        </span>
                        <img 
                            @click="$emit('columnSortButton',dataKeyNames[index])" 
                            width="20" 
                            height="20" 
                            src="../assets/sort.svg"
                        >
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="base-table-row" v-for="(row,index) in rowsPerPage" :key="index">
                <td v-for="(name,index) in dataKeyNames" :key="index" scope="row">
                    {{ row[name] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: "BaseTable",
    props:{
        tableHeadings:{
            type:Array
        },
        rowsPerPage: {
            type: Array
        },
        dataKeyNames: {
            type: Array
        }
    }
};
</script>

<style scoped>
.base-table {
    margin: 0 96px 0 0;
}
.base-table-row {
    height: 75px;
    vertical-align: middle;
}
.base-table-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>