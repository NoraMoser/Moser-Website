import { useState } from 'react'
import { apiSignUpNewUser, apiSendEmail} from '../../utils/api'

export default function useLogin() {
    const [error, setError] = useState('')

    const register = (registerObject) => {
        apiSignUpNewUser(registerObject)
        .then(({data}) => data)
        .catch(error => setError(error))
    }

    const sendEmail = email => {
        apiSendEmail(email)
        .then(({data}) => data)
        .catch(error => setError(error))
    }
    

    return {
        register,
        error,
        sendEmail
    }
}