/// <reference types="next" />
/// <reference types="next/types/global" />

type CustomError = {
    message: string
    code: number
    image?: string
}

type Dataset = {
    name: String
}

type Instance = {
    name: string
    url: string
}

type InstanceDetail = {
    name: string
    url: string
}