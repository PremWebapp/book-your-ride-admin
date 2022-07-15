export const fetchApi =async (api, type) => {
    const res = await fetch(api, {
        method: type, // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res.json()
    return result
}

export const postApi =async (api, data='', token='') => {
    const res = await fetch(api, {
        method: 'post', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'Host': 'api.producthunt.com'
          },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}