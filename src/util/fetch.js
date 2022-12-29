export const getData = async (url) => {
    const token = localStorage.getItem('header');
    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(token)
        }
    });
    return await response.json();
}