import app from './app'

app.listen(process.env.PORT || 3333, () =>
  console.log(`server running on port ${process.env.PORT}`)
)
