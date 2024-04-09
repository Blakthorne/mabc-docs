import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/Footer'

const config: DocsThemeConfig = {
  logo: <span>MABC Tech Docs</span>,
  project: {
    link: 'https://github.com/Blakthorne/mabc-docs',
  },
  docsRepositoryBase: 'https://github.com/Blakthorne/mabc-docs/blob/main',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' by '}
        <a href="https://davidpolar.com" target="_blank">
          David Polar
        </a>
        .
      </span>
    ),
  },
}

export default config
