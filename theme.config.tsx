import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';

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
        {'. Built with '}
        <a href="https://nextra.site/" target="_blank">
          Nextra
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – MABC'
        }
    }
  }
}

export default config
