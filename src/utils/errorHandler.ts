import { AxiosError } from "axios";


const errorHandler = (error: AxiosError): CustomError => {
    let message = "An internal error occurred"
    let code = 500
    if(error.response){
            message= error.response.data,
            code= error.response.status
    }       
    if(error.request) {
            message= error.request.data,
            code= error.request.status
    }
    return addImageByStatus({
        message,
        code
    })
}

const addImageByStatus = (customError : CustomError) :CustomError => {
    switch (customError.code) {
        case 500:
            customError.image = ''
            break;
            default:
            customError.image = ''
            break;
    }
    return customError
}

export default errorHandler