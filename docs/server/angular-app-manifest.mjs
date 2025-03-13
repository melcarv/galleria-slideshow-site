
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/galleria-slideshow-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/galleria-slideshow-site"
  },
  {
    "renderMode": 1,
    "route": "/Program%20Files/Git/galleria-slideshow-site/artwork/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 879, hash: '1086b6bf6eaa5334e090e386e346c094e637275bb37f7e895621154e531e10c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '9c754181dcb4de5590dd6dccd2e2e8e15f1a5808eba0ef8fa2d37c6d8b3ba25a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UFA2RV5V.css': {size: 223, hash: 'WrMWYzf2U7U', text: () => import('./assets-chunks/styles-UFA2RV5V_css.mjs').then(m => m.default)}
  },
};
