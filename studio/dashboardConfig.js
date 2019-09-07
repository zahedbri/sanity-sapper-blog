export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d73945e80b66178ca52fd28',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-12pyjg5t',
                  apiId: '3352628b-7cd5-40b7-923c-7f5d7895ba9c'
                },
                {
                  buildHookId: '5d73945e6500f1e0a8817528',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ur67kcdn',
                  apiId: '1992dc3b-f9ad-4e1f-a109-d0e775c13c3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zahedbri/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ur67kcdn.netlify.com', category: 'apps'}
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
