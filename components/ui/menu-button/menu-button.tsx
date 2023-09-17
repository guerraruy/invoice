import { GrMenu } from 'react-icons/gr'

import styles from './menu-button.module.scss'

interface Props {
  onClick: () => void
}

const MenuButton: React.FC<Props> = ({ onClick }): JSX.Element => {
  return (
    <div className={styles.menuButton} onClick={onClick}>
      <GrMenu />
    </div>
  )
}

export default MenuButton
