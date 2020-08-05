import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export function useActions(actions: any) {
    const dispatch = useDispatch()
    const boundActions = useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [actions, dispatch])
    return boundActions
}
