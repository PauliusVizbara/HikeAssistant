import { withFormik, FormikErrors } from 'formik'
import { equipmentById } from '../../domain/equipment'
import { EquipmentDictionary, EQUIPMENT_ID } from '../../domain/types'
import { EquipmentGatherer } from './EquipmentGatherer'

export type EquipmentFormValues = {
  multitoolNeeded: boolean
}

export type EquipmentGathererProps = {
  equipmentList: EquipmentDictionary
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
    if (values.multitoolNeeded)
      props.equipmentList[EQUIPMENT_ID.MAP] = equipmentById[EQUIPMENT_ID.MAP]
    console.log(values, props)
    const errors: FormikErrors<EquipmentFormValues> = {}
    return errors
  },

  handleSubmit: (values: EquipmentFormValues) => {
    console.log(values)
  },
})(EquipmentGatherer)
