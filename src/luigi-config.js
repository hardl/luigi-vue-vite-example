export const luigiConfig = {
    navigation: {
        nodes: [{
            pathSegment: 'home',
            label: '_',
            hideFromNav: true,
            children: [{ 
                pathSegment: 'overview', 
                label: 'Overview', 
                icon: 'home',
                viewUrl: './hello',
                context: {
                    title: 'Welcome to Luigi Fiddle!',
                    content: 'Click on "Modify Config" at the bottom right and play around with your Luigi configuration'
                }
            },{ 
                pathSegment: 'empty', 
                label: 'Empty Page', 
                category: {
                    label: 'My Category',
                    icon: 'dimension',
                    collapsible: true
                },
                loadingIndicator: {
                    enabled: false
                },
                viewUrl: 'https://fiddle.luigi-project.io/examples/microfrontends/fundamental/empty-demo-page.html'
            }]
        }]
    },
    routing: {
        useHashRouting: true
    },
    settings: {
        responsiveNavigation: 'Fiori3',
        header: {
            title: 'Luigi Vue Vite'
        }
    }
}