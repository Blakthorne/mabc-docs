import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
    title: "%s – MABC",
    description: "MABC Docs",
};

const banner = (
    <Banner storageKey="some-key">Please peruse our work in progress</Banner>
);

const navbar = (
    <Navbar
        logo={<b>MABC Tech Docs</b>}
        projectLink="https://github.com/Blakthorne/mabc-docs"
    />
);
const footer = (
    <Footer>
        <span>
            MIT {new Date().getFullYear()} ©{" by "}
            <a href="https://davidpolar.com" target="_blank">
                David Polar
            </a>
            {". Built with "}
            <a href="https://nextra.site/" target="_blank">
                Nextra
            </a>
        </span>
    </Footer>
);

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/Blakthorne/mabc-docs/blob/main"
                    footer={footer}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
