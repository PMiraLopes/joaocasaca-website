import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import ROUTES from '../enums/routes'

const lazyRoutes = {
  Homepage: lazy(() => import(/* webpackChunkName: "Homepage" */ './Homepage')),
  Project: lazy(() => import(/* webpackChunkName: "Project" */ './Project')),
  Resume: lazy(() => import(/* webpackChunkName: "Resume" */ './Resume')),
}

const routes: RouteProps[] = [
  {
    component: lazyRoutes.Homepage,
    path: ROUTES.homepage,
    exact: true,
  },
  {
    component: lazyRoutes.Resume,
    path: ROUTES.resume,
    exact: true,
  },
  {
    component: lazyRoutes.Project,
    path: ROUTES.project,
    exact: true,
  },
  {
    component: lazy(() =>
      import(/* webpackChunkName: "NotFound" */ './NotFound'),
    ),
  },
]

export default routes
