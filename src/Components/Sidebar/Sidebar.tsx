import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  // return /*#__PURE__*/React.createElement("aside", null, "sidebar");

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1695593565236-aaaf585f7048?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className={styles.profile}>

        <Avatar src="https://github.com/Milimaverde.png" />
        <strong>Millena Limaverde</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}