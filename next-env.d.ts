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
    _id: string
    name: string
    url: string
    packagesCount: number
}

type Resource = {
    id: string
    name: string
    mimetype: string
    cache_url: string
    hash: string
    description: string
    format: string
    url: string
    datastore_active: boolean
    created: string
    cache_last_updated: string
    package_id: string
    mimetype_inner: string
    last_modified: string
    position: number
    size: string
    url_type: string
    resource_type: string
}

type Package =  {
    _id: string
    id: string
    name: string
    relationships: []
    resources: Resoure[]
    tags: string []
    groups: []
    license_title: string
    maintainer: string
    private: boolean
    maintainer_email: string
    num_tags: number
    metadata_created: string
    license: string
    metadata_modified: string
    author: string
    author_email: string
    download_url: string
    state: string
    version: string
    creator_user_id: string
    type: string
    num_resources: number
    license_id: string
    organization: string
    isopen: boolean
    notes_rendered: string
    url: string
    ckan_url: string
    notes: string
    owner_org: string
    ratings_average: number
    ratings_count: number
    title: string
    revision_id: string
    instanceId: string
    __v: number
}
