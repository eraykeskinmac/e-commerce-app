import axios from "axios";

export const fetchProductList = async (req, res) => {
    const { data } = await axios.get('http://localhost:4000/product');

    return data;
}