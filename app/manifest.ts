import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    const title = "Task Calendar";
    const description =
    "This is an application to track all the tasks to be done while taking into account appointments and work schedule in a calendar format.";

    return {
        name: title,
        short_name: title,
        description: description,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#010402',
        theme_color: '#000',
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64 32x32 24x24 16x16",
                type: "image/x-icon",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            }
        ],
        shortcuts: [
            {
                name: "Home",
                short_name: "Home",
                description: "View your calendar",
                url: "/home?source=pwa",
                icons: [{ "src": "/android-chrome-192x192.png", "sizes": "192x192" }]
            },
            {
                name: "Login",
                short_name: "Login",
                description: "Log into Task Calendar",
                url: "/login?source=pwa",
                icons: [{ "src": "/android-chrome-192x192.png", "sizes": "192x192" }]
            },
            {
                name: "Sign Up",
                short_name: "SignUp",
                description: "Create an account to use Task Calendar",
                url: "/Register?source=pwa",
                icons: [{ "src": "/android-chrome-192x192.png", "sizes": "192x192" }]
            }
        ],
    }
}