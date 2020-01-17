export default async (req, res, next) => {
  if (req.user && req.user.isAdmin) return next()

  return res.status(401).json({ error: 'Permission invalid' })
}
