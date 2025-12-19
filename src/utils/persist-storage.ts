export const setLocalItem = (key: string, data: string) => {
    try {
        localStorage.setItem(key, data);
    } catch {
        console.log("Error saving data");
    }
}

export const getLocalItem = (key: string) => {
    try {
        if (key) {
            return localStorage.getItem(key);
        }
    } catch (error) {
        console.log("Error returning data", error);
    }
}
