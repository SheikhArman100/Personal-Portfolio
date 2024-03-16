import mongodb from '@/public/assets/mongodb.png'
import nextjs from '@/public/assets/next.png'
import nodejs from '@/public/assets/node.png'
import bakingShop from"@/videos/baking Shop.mp4"
import taskList from"@/videos/task list.mp4"
import newsJournal from"@/videos/News Journal.mp4"
import photographerPortfolio from"@/videos/Photographer Portfolio.mp4"

export const projects = [
  {
    id: 1,
    title: 'Baking Shop',
    video: bakingShop,
    description:
      'This is baking shop website where you can buy cake,cupcake, chocolate etc. This website is designed and created by me with some excellent interaction',
    languages: [
      {
        icon: nextjs,
        title: 'NextJs'
      },
      {
        icon: nodejs,
        title: 'NodeJs'
      },
      {
        icon: mongodb,
        title: 'MongoDb'
      }
    ],
    github: 'https://github.com/SheikhArman100/Baking-Tales-v2.0.git',
    preview: 'https://baking-tales-v2.vercel.app/'
  },
  {
    id: 2,
    title: 'Task list App',
    video:taskList,
    description: 'The concept and design of this tasklist website were heavily inspired by Todoist.Using this, You can easily manage your daily tasks',
    languages: [{
        icon: nextjs,
        title: 'NextJs'
      },
      {
        icon: nodejs,
        title: 'NodeJs'
      },
      {
        icon: mongodb,
        title: 'MongoDb'
      }],
    github: 'https://github.com/SheikhArman100/Task-List-MERN-App.git',
    preview: 'https://task-list-mern-app.vercel.app/'
  },
  {
    id: 3,
    title: 'Photographer Portfolio',
    video:photographerPortfolio,
    description: 'This a personal portfolio for photographer too showcase their photography.The website is full of some complex interaction',
    languages: [{
        icon: nextjs,
        title: 'NextJs'
      },],
    github: 'https://github.com/SheikhArman100/Photographer-Portfolio.git',
    preview: 'https://photographer-portfolio-six.vercel.app/'
  },
  {
    id: 4,
    title: 'News Journal',
    video:newsJournal,
    description: 'This is a news-journal website where you can get updated news every 10 minutes.This is a collection of news from different news portal',
    languages: [{
        icon: nextjs,
        title: 'NextJs'
      },
      {
        icon: nodejs,
        title: 'NodeJs'
      },
      {
        icon: mongodb,
        title: 'MongoDb'
      }],
    github: 'https://github.com/SheikhArman100/News-Journal.git',
    preview: 'https://news-journal-kcez.vercel.app/'
  }
]
