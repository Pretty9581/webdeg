/**
 * @intro: 路由.
 *
 */
import routes, {Error, UserLogin} from './auto-routes'

export default [{
  path: '*',
  redirect: Error.path
}, {
  path: '/',
  redirect: UserLogin.path
}].concat(routes)
