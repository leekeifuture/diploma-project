import * as axios from 'axios'

export const baseURL = 'http://ec2-3-139-236-31.us-east-2.compute.amazonaws.com'

const axiosInstance = axios.create({baseURL})

export const ibstu = {
    getFaculties() {
        return axiosInstance.get(`/faculties`)
            .then(response => response.data)
    },
    getDepartments(facultyId) {
        return axiosInstance.get(`/faculties/${facultyId}/departments`)
            .then(response => response.data)
    },
    getTeachers(departmentId) {
        return axiosInstance.get(`/users`, {
            params: {departmentId}
        })
            .then(response => response.data)
    },
    getTeacher(teacherId) {
        return axiosInstance.get(`/users/${teacherId}`)
            .then(response => response.data)
    },
    getNews(departmentId) {
        return axiosInstance.get(`/news`, {
            params: {departmentId}
        })
            .then(response => response.data)
    },
    getNew(newsId) {
        return axiosInstance.get(`/news/${newsId}`)
            .then(response => response.data)
    }
}
