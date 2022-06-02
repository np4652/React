import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/employees";

class BannerService {
    async getBanner(){
        return await axios.get(BASE_URL);
    }
    async createBanner(banner){
        return await axios.post(BASE_URL, banner);
    }
    getBannerById(bannerId){
        return axios.get(BASE_URL + '/' + bannerId);
    }
    updateBanner(banner, bannerId){
        return axios.put(BASE_URL + '/' + bannerId, banner);
    }
    deleteBanner(bannerId){
        return axios.delete(BASE_URL + '/' + bannerId);
    }
}

export default new BannerService()