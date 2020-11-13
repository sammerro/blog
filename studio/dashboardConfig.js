export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5faedc98560a7d2470df9736',
                  title: 'Sanity Studio',
                  name: 'blog-studio-x3ae6z1n',
                  apiId: '19aea606-ef77-4845-a7d4-1f627b81d07a'
                },
                {
                  buildHookId: '5faedc98560a7d25a3dfa4b1',
                  title: 'Blog Website',
                  name: 'blog-web-x94dk9tr',
                  apiId: '68182507-0817-4358-9915-a86e87ce4fe6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sammerro/blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-web-x94dk9tr.netlify.app', category: 'apps'}
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
