import axios from "axios";

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "my_token"
    }

    setToken(token){
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    async request ({endpoint, method = `GET`, data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`
        
        const headers = {
            "Content-Type": "application/json",
            Authorization: this.token ? `Bearer ${this.token}` : "",
        }

        try {
            const res = await axios({url, method, data, headers})
            console.log("Fetched data: ", res.data)
            return {data: res.data, error: null}
        } catch (error) {
            console.error({errorResponse: error.response})
            const message = error?.response?.data?.error?.message
            return {data: null, error: message || String(error)}
        }
    }

    async loginUser(credentials) {
        return await this.request({endpoint: `auth/login`, method: `POST`, data: credentials})
    }

    async signupUser(credentials) {
        return await this.request({endpoint: `auth/register`, method: `POST`, data: credentials})
    }

    async createNutrition(nutrition) {
        return await this.request({endpoint: `nutrition`, method: `POST`, data: nutrition})
    }

    async fetchNutrition() {
        return await this.request({endpoint: `nutrition`, method: `GET`, data: null})
    }

    async fetchNutritionById(nutritionId){
        return await this.request({endpoint: `nutrition/id/${nutritionId}`, method: `GET`})
    }

    async fetchUserFromToken() {
        return await this.request({endpoint: `auth/me`, method: `GET`})
    }

    async logoutUser() {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }

}

const apiClient = new ApiClient ("http://localhost:3001")

export default apiClient