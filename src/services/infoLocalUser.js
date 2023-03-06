export const getInfoUser = () =>{
    return JSON.parse(localStorage.getItem('user')) || {}

}

export const setInfoUser = (data) =>{
    localStorage.setItem('user', JSON.stringify(data))
}