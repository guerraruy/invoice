import { FC, SyntheticEvent } from 'react'

import styles from './icon-button.module.scss'

interface Props {
  children: JSX.Element
  onClick: (e: SyntheticEvent) => void
}

const IconButton: FC<Props> = ({ children, onClick, ...rest }): JSX.Element => (
  <button className={styles.iconButton} onClick={onClick} {...rest}>
    {children}
  </button>
)

export default IconButton
