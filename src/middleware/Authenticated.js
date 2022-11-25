import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedUser } from '../store'


export default function Authenticated(props) {

    const auth = useRecoilValue(authenticatedUser)
    const history = useNavigate()
    useEffect(() => {
        if (!auth.check) {
            history('/login')
        }
    })

    return props.render
}
