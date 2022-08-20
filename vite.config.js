import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        watch: {
            usePolling: true,
            paths: ["resources/app/*"],
        },
    },
    plugins: [
        laravel({
            input: ["/resources/app/app.ts"],
            refresh: [
                {
                    paths: ["/resources/app/*"],
                    config: { delay: 300 },
                },
            ],
            include: ["/resources/app/*"],
        }),
        react({
            include: [/\.tsx?$/],
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/app",
        },
    },
});
