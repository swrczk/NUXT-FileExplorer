<template>
    <div class="card border border-warning p-2">
        <div class="row">
            <div class="col-md-3 text-center">
                <b-icon :icon="icon" font-scale="3"></b-icon>
            </div>
            <div class="col-md-9 card-body">
                <h5 class="card-title">{{ name }}</h5>
                <div v-if="edit">
    <b-form @submit="onSubmit" >
                    <b-form-input v-model="name" type="text" placeholder="Enter name" required></b-form-input>
                    <b-form-input v-model="size" type="number" step="0.01" placeholder="Enter name" required></b-form-input>
                    <b-button type="submit" variant="primary">Save</b-button>
                    </b-form>
                </div>
                <div v-else>
                    <p class="card-text">
                        Full name: {{ name }}{{ extension }} <br />
                        Size: {{ size }}<br />
                        Modification Data: {{ modificationData }}<br />
                    </p>
                    <b-dropdown text="..." class="w-100">
                        <b-dropdown-item @click="editFile">Edit</b-dropdown-item>
                        <b-dropdown-item @click="deleteFile">Delete</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fileTypes } from "../common/helpers.js"

export default {
    props: {
        id: String,
        name: String,
        type: String,
        size: Number,
        modificationData: String
    },
    computed: {
        extension() {
            return fileTypes.find((el) => this.type === el.key).format
        },
        icon() {
            switch (this.type) {
                case "Music":
                    return "music-note"
                case "Text":
                    return "text-paragraph"
                case "Image":
                    return "image-alt"
                default:
                    return "file-binary"
            }
        }
    },
    data() {
        return {
            edit: false
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            this.edit = !this.edit
            this.modificationData = new Date().toISOString()
        },
        deleteFile() {
            this.$store.commit("deleteFile", { id: this.id })
        },
        editFile() {
            this.edit = !this.edit
        }
    }
}
</script>

<style scoped>
i {
    color: black;
}
</style>
