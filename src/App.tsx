import { Header } from "./Components/Header/Header"
import { Sidebar } from "./Components/Sidebar/Sidebar"
import { Post, PostType } from "./Components/PostFeed/Post"

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Milimaverde.png',
      name: 'Millena Limaverde',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
   

    ],
      publishedAt: new Date('2023-10-27 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mmouradev.png',
      name: 'Matheus Moura',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
   

    ],
      publishedAt: new Date('2023-10-27 10:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Milimaverde.png',
      name: 'Millena Limaverde',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
   

    ],
      publishedAt: new Date('2023-10-27 10:00:00'),
  },
];



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />

            ) 
          }) }
        </main>
      </div>
    </div>
  )
}
