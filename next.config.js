/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'www.corretoron.com.br',
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/produtos',
                destination: '/empreendimentos',
            },
            {
                source: '/produto/:id/:slug',
                destination: '/empreendimentos/:id/:slug',
            },
            {
                source: '/produto/:id',
                destination: '/empreendimentos/:id',
            },

            // {
            //     source: '/espelho-de-vendas',
            //     destination: '/area-de-trabalho/empreendimentos/espelho-de-vendas',
            // },
            {
                source: '/compliance/:slug',
                destination: '/compliance',
            },
        ]
    },
}

module.exports = nextConfig
