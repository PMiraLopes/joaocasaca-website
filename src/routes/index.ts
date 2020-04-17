import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

const lazyRoutes = {
  Homepage: lazy(() => import(/* webpackChunkName: "Homepage" */ './Homepage')),
  Project: lazy(() => import(/* webpackChunkName: "Project" */ './Project')),
  Resume: lazy(() => import(/* webpackChunkName: "Resume" */ './Resume')),
}

const routes: RouteProps[] = [
  {
    component: lazyRoutes.Homepage,
    path: '/',
    exact: true,
  },
  {
    component: lazyRoutes.Resume,
    path: '/resume',
    exact: true,
  },
  {
    component: lazyRoutes.Project,
    path: '/project/:name',
    exact: true,
  },
  {
    component: lazy(() =>
      import(/* webpackChunkName: "NotFound" */ './NotFound'),
    ),
  },
]

export default routes
