// ApiData.js
import broken_characters from "./broken_characters.json";

class ApiData {
    constructor() {
        this.cachedData = null;
    }

    async fetchData() {
        if (this.cachedData) return this.cachedData;

        const response = await fetch(
            "https://dattebayo-api.onrender.com/characters?limit=" +
            `${50 + broken_characters.length}`
        );
        const data = await response.json();

        const charList = data.characters.map((char) => ({
            id: char.id,
            name: char.name,
            images: char.images,
        }));

        this.cachedData = charList.filter(
            (char) => !broken_characters.includes(char.id)
        );

        return this.cachedData;
    }

    async getAll() {
        return await this.fetchData();
    }

    async getCharById(charId) {
        const all = await this.fetchData();
        return all.find((char) => char.id === charId);
    }
}

export default new ApiData();
