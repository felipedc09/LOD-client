import { AxiosError } from "axios";


const errorHandler = (error: AxiosError): CustomError => {
    let message = "An internal error occurred"
    let code = 500
    if(error.response){
        message= error.response.statusText,
        code= error.response.status
    }else if(error.request) {
        message= error.request,
        code= error.request.status
    }
    return addImageByStatus({
        message,
        code
    })
}

const addImageByStatus = (customError : CustomError) :CustomError => {
    switch (customError.code) {
        case 400:
            customError.image = '/400-bad-request.png'
            break;
        case 403:
            customError.image = '/403-forbidden.png.png'
            break;
        case 404:
            customError.image = '/404-not-found.png'
            break;
        case 410:
            customError.image = '/410-gone.png'
            break;
        case 418:
            customError.image = '/418-im-a-teapot.png'
            break;
        case 429:
            customError.image = '/429-too-many-requests.png'
            break;
        case 503:
            customError.image = '/503-service-unavailable.png'
            break;
        case 504:
            customError.image = '/504-gateway-timeout.png'
            break;
        default:
            customError.image = '/500-internal-server-error.png'
            break;
    }
    return customError
}

export default errorHandler