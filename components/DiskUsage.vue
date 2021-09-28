<template>
    <div class="container-fluid fixed-bottom bg-secondary text-white p-3">
        <div class="row">
            <div class="col-md-6">Disk usage: {{ diskPercentage }} %</div>
            <div class="col-md-6 d-flex justify-content-end">Files: {{ files }}</div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        diskPercentage() {
            return this.$store.getters.getDiskPercentage
        },
        files() {
            return this.$store.getters.files
        }
    }
}
</script>

<style scoped>
</style>
