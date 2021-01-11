import './src/styles/reset.css'
import './src/styles/global.scss'

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state)
    location.state.referrer = prevLocation ? prevLocation.pathname : null
}
