export const formDefaultValue: IBLOG_FORM_VALUES = {
    title: '',
    status: '',
    content : '',
    category: ''
}

interface IBLOG_FORM_VALUES {
    _id?: string
    title: string,
    status: string,
    content : string,
    category: string
}