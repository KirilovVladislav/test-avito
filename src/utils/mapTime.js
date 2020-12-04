export const mapTime = (timestamp) => {
    const seconds = Math.floor(((new Date() - timestamp * 1000) / 1000))

    let interval = Math.floor(seconds / 31536000)

    if (interval > 1) {
        if (interval < 2) {
            return `${interval} year`
        }
        return `${interval} years`
    }
    interval = Math.floor(seconds / 2592000)

    if (interval > 1) {
        if (interval < 2) {
            return `${interval} month`
        }
        return `${interval} months`
    }
    interval = Math.floor(seconds / 86400)

    if (interval > 1) {
        if (interval < 2) {
            return `${interval} day`
        }
        return `${interval} days`
    }
    interval = Math.floor(seconds / 3600)

    if (interval > 1) {
        if (interval < 2) {
            return `${interval} hour`
        }
        return `${interval} hours`
    }
    interval = Math.floor(seconds / 60)


    if (interval === 1) {
        return `${interval} minute`
    }
    return `${interval} minutes`
}