module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': () => Promise.resolve([2, 'always', ['sentence-case']]),
  },
};
