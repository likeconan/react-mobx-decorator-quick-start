/* eslint-env node, mocha */
module.exports = {
    plugins: {
        'precss': {},
        'autoprefixer': {},
        'postcss-css-variables': {
            variables: {
                '--unit': '32px',
                '@media screen and (max-width: 960px)': {
                    '--unit': '16px'
                }
            }
        },
    }
};