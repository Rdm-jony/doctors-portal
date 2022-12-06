import { useEffect, useState } from "react"

const useToken = (email) => {
    const [token, setToken] = useState("")
    useEffect(() => {
        if (email) {
            fetch(`https://doctor-portal-server-alpha.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.access_token) {
                        localStorage.setItem("AccesToken", data.access_token)
                        setToken(data.access_token)
                    }

                })
        }
    }, [email])
    return [token]
}
export default useToken;