const API_BASE_URL = "https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/Read";

export default class MusicApiService {
    async readMusicGroupsAsync(page = 0, pageSize = 1000) {



        const response = await fetch(`${API_BASE_URL}?pageSize=${pageSize}`);
        if (!response.ok) {
            throw new Error("Failed to fetch music groups");
        }
        return await response.json();
    }
}