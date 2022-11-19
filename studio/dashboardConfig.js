export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63792992bd894418130dcec4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dmousfvd',
                  apiId: 'd99d53a7-f960-43ba-ac51-44999dd8087c'
                },
                {
                  buildHookId: '63792992142bf216fb41a7df',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rd4hptz6',
                  apiId: 'bafe0524-52b8-42bf-b58c-5eb4abb84bb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arkledc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rd4hptz6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
