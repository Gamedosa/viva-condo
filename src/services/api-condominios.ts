export const getCondominios = async () => {
    const response = await fetch('https://raw.githubusercontent.com/vagner107/viva-condo/refs/heads/main/src/app/condominios/api_condominio.json')

    return await response.json()
}