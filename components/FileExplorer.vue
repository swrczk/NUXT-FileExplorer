<template>
    <div class="container files-container">
        <div class="row">
            <div class="col-md-4 d-flex align-items-stretch my-3" v-for="item in files" :key="item.id">
                <File :id="item.id" :name.sync="item.name" :type="item.type" :size.sync="item.size" :modification-data.sync="item.modificationData" />
            </div>
        </div>
    </div>
</template>

<script>
import File from "../components/File.vue"

export default {
    name: "FileExplorer",
    components: {
        File
    },
    computed: {
        files() {
            return this.$store.state.files
        }
    }
}
</script>
<style  scoped>

.files-container{
    background: #ececec;
}
</style>
