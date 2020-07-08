<template>
    <div>
        <el-table-column v-bind="colConfig">
            <template v-slot="{row}">
                <a >{{row.date}} </a>
            </template>
        </el-table-column>
    </div>
</template>
<script>
export default {
    props: ['colConfig']
}
</script>