export const searchVideoKey = async (data, arr) => {
    return data.length ? await arr.push(data[0].key) : await arr.push('PeRCDH_zUnU')
}
