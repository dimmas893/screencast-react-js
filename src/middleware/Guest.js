import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedUser } from '../store'

export default function Guest(props) {

    const auth = useRecoilValue(authenticatedUser)
    const history = useNavigate()
    useEffect(() => {
        if (auth.check) {
            history('/dashboard')
        }
    })
    // console.log(auth.check)
    return props.render
}
