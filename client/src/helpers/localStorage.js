class LocalStorageClient {
    setItem = (key, value) => {
        localStorage.setItem(key, value);
    }

    getItem = (key) => {
        return localStorage.getItem(key);
    }

    deleteItem = (key) => {
        localStorage.removeItem(key)
    }
}

const storage = new LocalStorageClient();

export default storage;
