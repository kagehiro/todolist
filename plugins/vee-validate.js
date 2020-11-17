import { extend } from "vee-validate"
import { required, max } from "vee-validate/dist/rules"

extend("required", {
    ...required,
    message: "{_field_} can not be empty",
})

extend("max", {
    ...max,
    message: "{_field_} may not be greater than {length} characters",
})
