import { extend } from "vee-validate"
import { required, max } from "vee-validate/dist/rules"

extend("required", {
    ...required,
    message: "{_field_}が入力されていません",
})

extend("max", {
    ...max,
    message: "{_field_}は{length}文字までです",
})
