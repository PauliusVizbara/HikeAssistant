import { withFormik, FormikErrors } from 'formik'
import { EquipmentDictionary } from '../../domain/types'
import { EquipmentGatherer } from './EquipmentGatherer'

export type EquipmentFormValues = {
  map: boolean
  distanceInKm: number
  distancePerDayInKm: number
  isDogIncluded: boolean
  hikeDate: Date
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
      map: false,
      distanceInKm: 40,
      distancePerDayInKm: 40,
      isDogIncluded: false,
      hikeDate: new Date(),
    }
  },
  validate: (values, props) => {
    const { onUserInputChange } = props
    onUserInputChange(values)
    const errors: FormikErrors<EquipmentFormValues> = {}
    return errors
  },
  /* eslint-disable @typescript-eslint/no-empty-function*/
  handleSubmit: () => {},
})(EquipmentGatherer)
