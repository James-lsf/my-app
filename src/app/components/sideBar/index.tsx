import { FC } from 'react'
import style from './index.module.css'

interface ISideBarProps {
  children: React.ReactNode
  open: boolean
  onToggle: () => void
}

const SideBar: FC<ISideBarProps> = ({ children, open, onToggle}) => {
  return (
    <div className={`${style.sideBarContainer} ${open ? '' : style.close}`}>
      <div className={style.switch} onClick={onToggle}>
        <div className={style.top}>
          <div style={{background: 'rgb(214, 219, 220)', width: '100%', height: '100%', borderRadius: '0 0 0 78%'}} />
        </div>
        <div className={style.center}>{">"}</div>
        <div className={style.bottom}>
          <div style={{background: 'rgb(214, 219, 220)', width: '100%', height: '100%', borderRadius: '78% 0 0 0'}} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default SideBar