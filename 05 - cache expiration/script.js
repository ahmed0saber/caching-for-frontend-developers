const cache = getCacheFromLocalStorage()

function getCacheFromLocalStorage() {
    const storedCache = localStorage.getItem("cache")
    if (storedCache) return JSON.parse(storedCache)

    return {}
}

const getFlowerById = (id) => {
    if (cache[id] && cache[id].expires_at > Date.now()) {
        console.log(`Received flower ${id} from cache`)

        return cache[id]
    }

    fetch("https://flowers-api.onrender.com/flower/" + id)
        .then(res => res.json())
        .then(data => {
            const expiryTimeInMilliseconds = 10_000
            const expiryDate = Date.now() + expiryTimeInMilliseconds
            cache[data.index] = { ...data, expires_at: expiryDate }
            localStorage.setItem("cache", JSON.stringify(cache))
            console.log(`Received flower ${id} from api`)

            return data
        })
}

getFlowerById(1)

setTimeout(() => {
    getFlowerById(1)
}, 3000)

setTimeout(() => {
    getFlowerById(1)
}, 20000)
