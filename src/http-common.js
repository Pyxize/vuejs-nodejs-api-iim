import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-type": "application/json"
    },
    auth:{
        userId: `this.$store.state.user.userId`,
        token: `this.$store.state.user.token`
    }
});
