import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5b229779-3858-452e-8d92-2884bfc2d6fc"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data);
    },
    getUserInfo(userId) {
        return instance.get(`profile/` + userId)
            .then(responce => responce.data);
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
            .then(responce => responce.data);
    }
}


