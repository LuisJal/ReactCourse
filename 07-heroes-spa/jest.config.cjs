module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],

    transformIgnorePatterns: [
        '/node_modules/(?!(query-string)/)',  // Aquí se especifica que no ignore query-string
      ],
}
