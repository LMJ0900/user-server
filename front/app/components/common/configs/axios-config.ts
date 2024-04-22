import axios from 'axios'
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


export const instance = axios.create({ baseURL: 'http://localhost:8080/api'})

instance.interceptors.request.use(
    (config) => {
        const accessToken = parseCookies().accessToken;
        console.log('AXIOS 인터셉터에서 쿠키에서 토큰 추출함')
        config.headers['content-Type'] = "application/json"
        config.headers['Authorization'] = `Bearer ${accessToken}` 
        return config
    },
    (error) => {
        console.log('axios 인터셉터에서 발생한 에러 : ' + error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        if(response.status === 404){
            console.log('AXIOS 인터셉터에서 발생한 에러로 토큰이 없어서 404 페이지로 넘어감')
    }
    return response
}
)

export default instance