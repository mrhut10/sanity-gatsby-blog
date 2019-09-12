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
                  buildHookId: '5d7ad0020e10a6311594614b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hhg213a5',
                  apiId: '653a6ad1-6085-4d8c-a70d-9cd188e03785'
                },
                {
                  buildHookId: '5d7ad003d2f3b351779d142a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zuzcjua3',
                  apiId: 'cb560510-2ac4-4499-85c6-5a51f4aa31ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrhut10/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zuzcjua3.netlify.com', category: 'apps'}
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
