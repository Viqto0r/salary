import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'

type ActionNameType = 'input/setTariff' | 'input/setHarmfulness'
type ChangeHandlerType = ActionCreatorWithPayload<
  { value: string },
  ActionNameType
>

const useInput = (
  selector: (state: RootState) => string,
  changeHandler: ChangeHandlerType
) => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selector)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeHandler({ value: e.target.value }))
  }

  return { value, onChange }
}

export default useInput
