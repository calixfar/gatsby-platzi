const React = require('react')
const { Layout } = require('./src/components')
const { GlobalStyles } = require('./src/styles')
const {CartProvider} = require('./src/context')

exports.wrapPageElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>
      { element }
    </Layout>
  </CartProvider>
)