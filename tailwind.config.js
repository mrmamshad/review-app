import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                whitesmoke: "#f5f5f5",
                "custom-gray": "#808080",
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
        },
    },

    plugins: [
        forms,
        require("daisyui"),
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".gradient-text": {
                        background:
                            "linear-gradient(to right, gray, whitesmoke)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                    },
                    ".dark\\:gradient-text": {
                        background:
                            "linear-gradient(to right, #f5f5f5, #808080)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                    },
                },
                ["responsive", "hover", "dark"]
            );
        },
    ],
};

