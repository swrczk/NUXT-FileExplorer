<template>
    <div class="container-fluid py-3 bg-lilac ">
        <h3 class="text-center">Add new file</h3>
        <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input class="form-control" name="name" type="text" placeholder="Enter file name..." v-model="selected.name" />
        </div>
        <div class="form-group">
            <label for="size" class="form-label">Size</label>
            <input class="form-control" name="size" type="number" step="0.01" placeholder="Enter file size..." v-model.number="selected.size" />
        </div>
        <div class="form-group">
            <label for="type" class="form-label">Type</label>
            <select class="form-control" name="type" v-model="selected.type">
                <option v-for="item in fileTypes" :key="item.key" v-bind:value="item.key">
                    {{ item.label }}
                </option>
            </select>
        </div>
        <button class="btn " @click="creatFile(selected.name, selected.size, selected.type)">Add</button>
    </div>
</template>

<script>
import { fileTypes } from "../common/helpers.js"
export default {
    data() {
        return {
            fileTypes,
            selected: {
                name: "",
                size: 0.0,
                type: ""
            }
        }
    },
    methods: {
        resetFields() {
            this.name = ""
            this.size = 0.0
            this.type = ""
        },
        dataAreCorrect() {
            for (const property in this.selected) {
                if (!this.selected[property]) {
                    return false
                }
            }
            return true
        },
        creatFile(name, size, type) {
            if (this.dataAreCorrect()) {
                this.$store.commit("addFile", { name, type, size, modificationData: new Date().toISOString() })
                this.resetFields()
            } else {
                alert("Enter correct file")
            }
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
    background: #2b4162;
    color:white;
}
.bg-lilac {
    background: #fa9f42;
    color: #2b4162;
}

</style>
