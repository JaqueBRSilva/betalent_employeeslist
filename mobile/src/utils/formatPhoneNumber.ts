export function formatPhoneNumber(phone: string) {
    const cleanNumber = phone.replace(/\D/g, '')

    const ddi = cleanNumber.slice(0, 2)
    const ddd = cleanNumber.slice(2, 4)
    const firstPart = cleanNumber.slice(4, 9)
    const secondPart = cleanNumber.slice(9)

    return `+${ddi} (${ddd}) ${firstPart}-${secondPart}`
}