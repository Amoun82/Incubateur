module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                black: {
                    waya: '#1D1D1B',
                },
                blue: {
                    500: '#18A0FB',
                    900: '#035A9E',
                },
                red: {
                    700: '#E30613',
                },
                primary: {
                    light: '#4da6ff',
                    DEFAULT: '#0B84FF',
                    dark: '#0066cc',
                },
                secondary: {
                    light: '#f39e58',
                    DEFAULT: '#ed7410',
                    dark: '#bf5d0d',
                },
                PrimaryWaya: {
                    light: '#18A0FB',
                    DEFAULT: '#035A9E',
                },
                bgWaya: {
                    DEFAULT: '#E5E5E5',
                },
                wayaBlue: {
                    DEFAULT: '#145A9E',
                },
            },
        },
        fontFamily: {
            Montserrat: ['Montserrat'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
