import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound: React.FC = () => {
  const history = useHistory()
  return (
    <section>
      <div>
        <h1>Page not found</h1>
        <div>Image</div>
        <div onClick={() => history.push('/resume')}>resume</div>
        <div onClick={() => history.push('/')}>homepage</div>
        <div onClick={() => history.push('/project/name')}>project</div>
      </div>
    </section>
  )
}

export default NotFound
