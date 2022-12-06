import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)
    const [adminLoader, setAdminLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://doctor-portal-server-alpha.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                    }
                    setAdminLoader(false)
                })
        }
    }, [email, adminLoader])
    return [isAdmin, adminLoader]
}

export default useAdmin;