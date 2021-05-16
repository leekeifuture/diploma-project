import * as axios from 'axios'

export const baseURL = 'http://ec2-18-196-196-166.eu-central-1.compute.amazonaws.com'
export const keyCloakURL = 'http://ec2-18-191-242-32.us-east-2.compute.amazonaws.com:8080' +
    '/auth/realms/ibstu/protocol/openid-connect/auth' +
    '?client_id=ibstu-service' +
    '&redirect_uri=http://localhost:3000/keycloak' +
    '&state=2dde5518-cd76-41bd-813c-798ecac79251' +
    '&response_mode=fragment' +
    '&response_type=code' +
    '&scope=openid' +
    '&nonce=90c79c88-75ba-43bd-8b33-c04fa72de128' +
    '&code_challenge=md4LANXJ9Kln3SdPtrS19oXZo4wIMH7U6w_hr1kByFE' +
    '&code_challenge_method=S256'

const axiosInstance = axios.create({baseURL})
const config = {
    headers: {
        Authorization: ``
    }
}

export const ibstu = {
    registerUser(firstName, lastName, middleName, email, departmentId, position) {
        return axiosInstance.post('/users', {
                firstName, lastName, middleName, email, departmentId, position
            },
            config)
            .then(response => response.data)
    },
    getFaculties() {
        return axiosInstance.get('/faculties')
            .then(response => response.data)
    },
    getDepartments(facultyId) {
        return axiosInstance.get(`/faculties/${facultyId}/departments`)
            .then(response => response.data)
    },
    getTeachers(departmentId) {
        return axiosInstance.get('/users', {
            params: {departmentId}
        }).then(response => response.data)
    },
    getTeacher(teacherId) {
        return axiosInstance.get(`/users/${teacherId}`)
            .then(response => response.data)
    },
    getNew(newsId) {
        return axiosInstance.get(`/news/${newsId}`)
            .then(response => response.data)
    },
    getNews(departmentId) {
        return axiosInstance.get('/news', {
            params: {departmentId}
        }).then(response => response.data)
    },
    getMaterials(departmentId) {
        return axiosInstance.get('/files/department-materials', {
            params: {departmentId}
        }).then(response => response.data)
    },
    getMaterial(materialId) {
        return axiosInstance.get(`/files/${materialId}`)
            .then(response => response.data)
    },
    getMaterialsByUserId(userId) {
        return axiosInstance.get('/files/user-materials', {
            params: {userId}
        })
            .then(response => response.data)
    },
    updateMaterial(header, description, materialId) {
        const data = new FormData()
        data.append('header', header)
        data.append('description', description)
        return axiosInstance.put(`/files/materials/${materialId}`, data, config)
            .then(response => response.data)
    }
}
