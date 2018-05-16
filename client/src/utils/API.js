import axios from "axios";

export default {
    // get all the dogs
    getBauers: function() {
        return axios.get("/api/bauers");
    },
    // saves dog data to the database
    saveBauer: function(bauerData) {
        return axios.port("/api/bauers", bauerData);
    }
};