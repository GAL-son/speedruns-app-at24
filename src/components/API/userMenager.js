import axios from 'axios'

const localServerAdress = "http://localhost:8080";
const userRelatedEndpointsBase = "/speedruns/api/users";
const userBaseURL=localServerAdress+userRelatedEndpointsBase;

export const getUsers = () => {
    return axios.get(`${userBaseURL}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getUser = (id) => {
    return axios.get(`${userBaseURL}/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            // console.log(err)
            throw err
        })
}

export const register = (login,email,password,role) => {
    const data={
        login:login,
        email:email,
        password:password,
        role:role
    }
    return axios.post(`${userBaseURL}`,data)
        .then((res) => {
            return {data:res.data,status:res.status}
        })
        .catch((err) => {
            console.log(err)
        })
}

export const loginCall = (login,password) => {
    const data={
        login:login,
        password:password
    }
    return axios.post(`${userBaseURL}/login`,data)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}
export const updateUser = (userId,login,email,password,role,token) => {
    const header = {headers: {Authorization: `Bearer ${token}`}}
    const data={
        login:login,
        email:email,
        password:password,
        role:role
    }
    return axios.put(`${userBaseURL}/${userId}`,data,header)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}
export const deleteUser = (userId,token) => {
    const header = {headers: {Authorization: `Bearer ${token}`}}

    return axios.delete(`${userBaseURL}/${userId}`,header)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}







