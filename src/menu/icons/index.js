import styled from '@emotion/styled'
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
  faVideo,
} from '@fortawesome/free-solid-svg-icons'

const Span = styled.span`
  border-radius: 3px;
  padding: 3px;
  &:hover {
    background: lightgrey;
  }
`

const Icon = ({ icon, ...rest }) => (
  <Span>
    <FontAwesomeIcon icon={icon} {...rest} />
  </Span>
)

export const CloseIcon = (props) => <Icon icon={faTimes} {...props} />

export const DownIcon = (props) => <Icon icon={faAngleDown} {...props} />

export const QuickIcon = (props) => <Icon icon={faRocket} {...props} />

export const MenuIcon = (props) => <Icon icon={faBars} {...props} />

export const LeftIcon = (props) => <Icon icon={faAngleLeft} {...props} />

export const NewIcon = (props) => <Icon icon={faInbox} {...props} />

export const RightIcon = (props) => <Icon icon={faAngleRight} {...props} />

export const UpIcon = (props) => <Icon icon={faAngleUp} {...props} />

export const VideoIcon = (props) => <Icon icon={faVideo} {...props} />
