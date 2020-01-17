import * as Yup from 'yup'

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      total: Yup.number()
        .positive()
        .required(),
      note: Yup.string(),
      address: Yup.object()
        .shape({
          postalCode: Yup.string().required(),
          street: Yup.string().required(),
          number: Yup.string().required(),
          neighborhood: Yup.string().required(),
        })
        .required(),
      items: Yup.array().of(
        Yup.object().shape({
          typeSizeId: Yup.number().required(),
          price: Yup.number()
            .positive()
            .required(),
          discount: Yup.number()
            .positive()
            .min(0)
            .required(),
          total: Yup.number()
            .positive()
            .required(),
        })
      ),
    })

    await schema.validate(req.body, { abortEarly: false })

    return next()
  } catch (error) {
    return res.status(400).json({
      error: 'Validation fails',
      messages: error.inner,
    })
  }
}
