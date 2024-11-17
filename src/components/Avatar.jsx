import styles from './Avatar.module.css'

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      src={src}
      alt="User Avatar"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}
