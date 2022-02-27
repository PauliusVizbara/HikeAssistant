import { withFormik, FormikErrors } from 'formik'
import { EquipmentDictionary } from '../../domain/types'
import { EquipmentGatherer } from './EquipmentGatherer'

export type EquipmentFormValues = {
  multitoolNeeded: boolean
}

export type EquipmentGathererProps = {
  equipmentList: EquipmentDictionary
  onUserInputChange: (formValues: EquipmentFormValues) => void
}

export const EquipmentGathererContainer = withFormik<
  EquipmentGathererProps,
  EquipmentFormValues
>({
  mapPropsToValues: () => {
    return {
      multitoolNeeded: false,
    }
  },
  validate: (values, props) => {
    const { onUserInputChange } = props
    onUserInputChange(values)
    const errors: FormikErrors<EquipmentFormValues> = {}
    return errors
  },

  handleSubmit: (values: EquipmentFormValues) => {
    console.log(values)
  },
})(EquipmentGatherer)
