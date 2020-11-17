<template>
    <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
            <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:10"
            >
                <v-text-field
                    v-model="name"
                    :counter="10"
                    :error-messages="errors"
                    label="Name"
                    required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="select"
                rules="required"
            >
                <v-select
                    v-model="select"
                    :items="items"
                    :error-messages="errors"
                    label="Select"
                    data-vv-name="select"
                    required
                ></v-select>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="checkbox"
            >
                <v-checkbox
                    v-model="checkbox"
                    :error-messages="errors"
                    value="1"
                    label="Option"
                    type="checkbox"
                    required
                ></v-checkbox>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
        </form>
    </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate"

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: "",
        email: "",
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: null,
    }),

    methods: {
        submit() {
            this.$refs.observer.validate()
        },
        clear() {
            this.name = ""
            this.email = ""
            this.select = null
            this.checkbox = null
            this.$refs.observer.reset()
        },
    },
}
</script>
