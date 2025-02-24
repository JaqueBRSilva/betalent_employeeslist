export function formatAdmissionDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('pt-br')
}