import {baseUrl} from "../constants/api";

export const fetchData = async () => {
    try {
        const res = await fetch(`${baseUrl}`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}