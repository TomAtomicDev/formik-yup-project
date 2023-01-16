import { useFormik } from "formik";
import { basicSchema } from "../schemas";

 const onSubmitHandler = async (values, actions) => {
  console.log(values);
  await new Promise(resolve => {setTimeout(resolve, 1000)});
  actions.resetForm();
}

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword:"",
    },
    validationSchema: basicSchema,
    onSubmit: onSubmitHandler,
  })
    return (
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <h3>Ingresa con tus datos</h3>
        <label htmlFor="email">Tu email</label>
        <input 
          id="email" 
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.email && formik.touched.email ? "input-error" : ""}
        />
        {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
        <label htmlFor="email">Tu edad</label>
        <input 
          id="age" 
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.age && formik.touched.age ? "input-error" : ""}
        />
        {formik.errors.age && formik.touched.age && <p className="error">{formik.errors.age}</p>}
        <label htmlFor="email">Password</label>
        <input 
          id="password" 
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.password && formik.touched.password ? "input-error" : ""}
        />
        {formik.errors.password && formik.touched.password && <p className="error">{formik.errors.password}</p>}
        <label htmlFor="email">Confirm password</label>
        <input 
          id="confirmPassword" 
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.confirmPassword && formik.touched.confirmPassword ? "input-error" : ""}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && <p className="error">{formik.errors.confirmPassword}</p>}
        <button type="submit" disabled={formik.isSubmitting} >Crear cuenta</button>
      </form>
    );
  };
  export default BasicForm;