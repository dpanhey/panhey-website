const baseUrl = import.meta.env.BASE_URL;

export function url(path: string) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    if (baseUrl === '/') {
        return `/${cleanPath}`;
    }

    return `${baseUrl}/${cleanPath}`;
}
