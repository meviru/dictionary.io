import { CONSTANTS } from "../constants";

const fetchWordInfo = async (keyword: string) => {
    try {
        const response = await fetch(`${CONSTANTS.API_URL}/${keyword}`);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching the information:', error);
        throw error
    }
}

export default fetchWordInfo;