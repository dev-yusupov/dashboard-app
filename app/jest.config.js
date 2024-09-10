export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    preset: 'ts-jest', // Use the ts-jest preset
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|css|scss)$':
            '<rootDir>/__mocks__/fileMock.js',
    },
};
