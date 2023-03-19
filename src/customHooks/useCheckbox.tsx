import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'

type ActionNameType = 'input/toggleHarmfulness' | 'input/toggleNightShifts'
type ChangeHandlerType = ActionCreatorWithoutPayload<ActionNameType>

const useCheckbox = (
  selector: (state: RootState) => boolean,
  changeHandler: ChangeHandlerType
) => {
  const dispatch = useAppDispatch()
  const checked = useAppSelector(selector)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeHandler())
  }

  return { checked, onChange }
}

export default useCheckbox
