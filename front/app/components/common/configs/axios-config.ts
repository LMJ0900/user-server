import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

// export default function AxiosConfig(){
//     return {
//         headers: {
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/json",
//             Authorization: `Bearer blah ~`,
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
// }


export default function instance() {
    const instance = axios.create({baseURL: process.env.NEXT_PUBLIC_API_URL})
    setInterceptor(instance)
        return instance
}

export const setInterceptor = (inputInstance:AxiosInstance)=>{
    inputInstance.interceptors.request.use(
    (config) => {
        const accessToken = parseCookies().accessToken;
        console.log('AXIOS 인터셉터에서 쿠키에서 토큰 추출함')
        config.headers['content-Type'] = "application/json"
        config.headers['Authorization'] = `Bearer ${accessToken}` 
        return config
    },(error) => {
        console.log('axios 인터셉터에서 발생한 에러 : ' + error)
        return Promise.reject(error)
    })

inputInstance.interceptors.response.use(
    (response) => {
        if(response.status === 404) console.log('AXIOS 인터셉터에서 발생한 에러로 토큰이 없어서 404 페이지로 넘어감')
            return response
    }
)
    return inputInstance
}

