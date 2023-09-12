import { GrMenu } from 'react-icons/gr'

import styles from './menu-button.module.scss'

const MenuButton = ({ onClick }) => {
  return (
    <div className={styles.menuButton} onClick={onClick}>
      <GrMenu />
    </div>
  )
}

export default MenuButton
