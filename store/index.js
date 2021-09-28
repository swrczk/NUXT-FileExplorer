import Vue from "vue"
import Vuex from "vuex"
import { v4 } from "uuid"

Vue.use(Vuex)

export const state = () => ({
    // files: 0,
    // memory: 0,
    maxAmout: 1000000,
    files: [
        { id: v4(), name: "for_elise", type: "Music", size: 3.5, modificationData: new Date().toISOString() },
        { id: v4(), name: "Moonlight Sonata", type: "Music", size: 12.0, modificationData: new Date().toISOString() },
        {
            id: v4(),
            name: "LudwigBeethoven–wiki",
            type: "Text",
            size: 103.5,
            modificationData: new Date().toISOString()
        },
        { id: v4(), name: "beethoven", type: "Image", size: 1.2, modificationData: new Date().toISOString() }
    ]
})

export const mutations = {
    // increment(state) {
    //     state.files++
    // },
    // decrement(state) {
    //     state.files--
    // },
    // takeMemory(state, payload) {
    //     state.memory += payload
    // },
    // releaseMemory(state, payload) {
    //     state.memory -= payload
    // },
    addFile(state, payload) {
        state.files.push(payload)
    },
    deleteFile(state, payload) {
        state.files = state.files.filter((element) => element.id !== payload.id)
    },
    editeFile(state, payload) {
        state.files.find((element) => element.id === payload.id)
    }
}

export const actions = {
    // increment: ({ commit }) => commit("increment"),
    // decrement: ({ commit }) => commit("decrement"),
    // takeMemory: ({ commit, state }, payload) => state.maxAmout - state.memory >= 0 && commit("takeMemory", payload),
    // releaseMemory: ({ commit, state }, payload) => state.memory - payload >= payload && commit("releaseMemory", payload),
    // checkPayload: (payload) => {
    //     for (const property in payload) {
    //         if (!property) {
    //             return false
    //         }
    //     }
    //     return true
    // },
    addFile: ({ commit, state, getters }, payload) => state.maxAmout - getters.memory >= payload.size && commit("addFile", payload),
    deleteFile: ({ commit }, payload) => commit("deleteFile", payload),
    editeFile: ({ commit }, payload) => commit("editeFile", payload)
}

export const getters = {
    getDiskPercentage: (state, getters) => ((getters.memory / state.maxAmout) * 100).toFixed(2),
    files: (state) => state.files.length,
    memory: (state) =>
        state.files.reduce((acc, item) => {
            acc += item.size
            return acc
        }, 0)
}
