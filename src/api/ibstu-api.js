import * as axios from 'axios'

const baseURL = 'http://ec2-3-139-236-31.us-east-2.compute.amazonaws.com'

const axiosInstance = axios.create({baseURL})

export const ibstu = {
    getFaculties() {
        return axiosInstance.get('/faculties')
            .then(response => response.data)
    },
    getDepartments(facultyId) {
        return axiosInstance.get(`/faculties/${facultyId}/departments`)
            .then(response => response.data)
    }
}
