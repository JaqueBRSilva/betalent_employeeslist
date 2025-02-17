export type DataTypes = {
    id: string
    image: string
    name: string
    hiddenProps: {
        job: string
        admission_date: string
        phone: string
    }
}

export interface HiddenDataProps {
    job: string
    admission_date: string
    phone: string
}