import { API } from "../constants";

const fetchWordInfo = async (keyword: string) => {
    try {
        const response = await fetch(`${API.URL}/${keyword}`);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the information:', error);
        throw error
    }
}

export default fetchWordInfo;