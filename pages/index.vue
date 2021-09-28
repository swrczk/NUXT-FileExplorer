<template>
    <div class="container-fluid">
        <div class="row d-flex">
            <AddFile class="col-md-3 row-full" />
            <FileExplorer class="col-md-9 overflow-scroll-on-full" />
        </div>
        <DiskUsage class="position-absolute" />
    </div>
</template>

<script>
import FileExplorer from "../components/FileExplorer.vue"
import DiskUsage from "../components/DiskUsage.vue"
import AddFile from "../components/AddFile.vue"

export default {
    components: {
        DiskUsage,
        FileExplorer,
        AddFile
    }
}
</script>
<style scoped>
.row-full {
    height: 100vh;
    overflow: hidden;
}

.overflow-scroll-on-full {
    max-height: 100vh;
    overflow: scroll;
}
</style>
