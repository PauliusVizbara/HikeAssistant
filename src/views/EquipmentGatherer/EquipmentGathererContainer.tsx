import { withFormik, FormikErrors } from 'formik'
import { EquipmentGatherer } from './EquipmentGatherer'

export type EquipmentFormValues = {
  multitoolNeeded: boolean
}

export const EquipmentGathererContainer = withFormik<
  Record<string, never>,
  EquipmentFormValues
>({
  mapPropsToValues: () => {
    return {
      multitoolNeeded: false,
    }
  },

  validate: (values: EquipmentFormValues) => {
    console.log(values)
    const errors: FormikErrors<EquipmentFormValues> = {}
    return errors
  },

  handleSubmit: (values: EquipmentFormValues) => {
    console.log(values)
  },
})(EquipmentGatherer)
