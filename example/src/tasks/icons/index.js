import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faAngleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faInbox,
  faRocket,
  faVideo
} from '@fortawesome/free-solid-svg-icons'

const Span = styled.span`
  border-radius: 3px;
  padding: 3px;
  &:hover {
    background: lightgrey;
  }
`

const Icon = ({icon, ...rest}) => {
  return (
    <Span>
      <FontAwesomeIcon icon={icon} {...rest} />
    </Span>
  )
}

export const CloseIcon = (props) => {
  return <Icon icon={faTimes} {...props} />
}

export const DownIcon = (props) => {
  return <Icon icon={faAngleDown} {...props} />
}

export const QuickIcon = (props) => {
  return <Icon icon={faRocket} {...props} />
}

export const MenuIcon = (props) => {
  return <Icon icon={faBars} {...props} />
}

export const LeftIcon = (props) => {
  return <Icon icon={faAngleLeft} {...props} />
}

export const NewIcon = (props) => {
  return <Icon icon={faInbox} {...props} />
}

export const RightIcon = (props) => {
  return <Icon icon={faAngleRight} {...props} />
}

export const UpIcon = (props) => {
  return <Icon icon={faAngleUp} {...props} />
}

export const VideoIcon = (props) => {
  return <Icon icon={faVideo} {...props} />
}
