export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Nav } from '../..\\components\\Nav.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c)
