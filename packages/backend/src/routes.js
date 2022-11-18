import { Router } from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import SaleController from './app/controllers/SaleController'
import ProductController from './app/controllers/ProductController'
import TypeController from './app/controllers/TypeController'
import SizeController from './app/controllers/SizeController'
import TypeSizeController from './app/controllers/TypeSizeController'

import validateUserStore from './app/validators/UserStore'
import validateSessionStore from './app/validators/SessionStore'
import validateSaleStore from './app/validators/SaleStore'
import validateProductStore from './app/validators/ProductStore'
import validateTypeStore from './app/validators/TypeStore'
import validateSizeStore from './app/validators/SizeStore'
import validateTypeSizeStore from './app/validators/TypeSizeStore'

import authMiddleware from './app/middlewares/auth'
import adminMiddleware from './app/middlewares/admin'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', validateUserStore, UserController.store)
routes.post('/sessions', validateSessionStore, SessionController.store)

routes.use(authMiddleware)

/** Sales */

routes.get('/sales', SaleController.index)
routes.get('/sales/:id', SaleController.show)
routes.post('/sales', validateSaleStore, SaleController.store)

/** Products */

routes.get('/products', ProductController.index)
routes.post(
  '/products',
  adminMiddleware,
  upload.single('image'),
  validateProductStore,
  ProductController.store
)

/** Products Types */

routes.get('/products/:id/types', TypeController.index)
routes.post(
  '/products/:id/types',
  adminMiddleware,
  upload.single('image'),
  validateTypeStore,
  TypeController.store
)

/** Products Sizes */

routes.get('/products/:id/sizes', SizeController.index)
routes.post(
  '/products/:id/sizes',
  adminMiddleware,
  upload.single('image'),
  validateSizeStore,
  SizeController.store
)

/** Types Sizes */

routes.get('/types/:typeId/sizes', TypeSizeController.index)
routes.post(
  '/types/:typeId/sizes/:sizeId',
  adminMiddleware,
  validateTypeSizeStore,
  TypeSizeController.store
)

export default routes
