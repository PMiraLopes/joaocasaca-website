import React from 'react'
import {useHistory} from 'react-router-dom'
import ROUTES from '../../enums/routes'
const NotFound: React.FC = () => {
  const history = useHistory()
  return (
    <section>
      <div>
        <h1>Page not found</h1>
        <div>Image</div>
        <div onClick={() => history.push(ROUTES.resume)}>resume</div>
        <div onClick={() => history.push(ROUTES.homepage)}>homepage</div>
        <div onClick={() => history.push(ROUTES.project)}>project</div>
      </div>
    </section>
  )
}

export default NotFound
