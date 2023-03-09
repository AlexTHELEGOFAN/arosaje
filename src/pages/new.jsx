import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import * as React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"

function newAdvert() {
  //   const { setCurrentUser } = useContext(UserContext)

  // Handle login Formik
  const handleSubmit = values => {
    // axios
    //   .get(
    //     `${UrlAPI}/api/Token?password=${values.username}&username=${values.password}`,
    //     {
    //       headers: config,
    //     }
    //   )
    //   .then((res) => {
    //     // Create and set browser cookies
    //     const cookies = new Cookies();
    //     cookies.set('jwt', res.data);
    //     localStorage.setItem('jwt', res.data);

    //     // Get and decode jwt token
    //     const jwt = cookies.get('jwt');
    //     const decodedToken = jwtDecode(jwt);
    //     setCurrentUser(decodedToken.unique_name);
    //     localStorage.setItem('user', decodedToken.unique_name);
    navigate("/home")
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error("Nom d'utilisateur ou mot de passe incorrect", {
    //       position: 'bottom-right',
    //     });
    //   });
  }

  return (
    <Layout>
      <div>
        <button
          className="flex text-center items-center ml-5 mt-5"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2xl"
            className="w-5 h-5 text black mr-5"
          />
          Retour
        </button>
        <div className="flex justify-center items-center">
          <div className="bg-secondGreen px-8 py-5 rounded-md drop-shadow-md">
            <h1 className="text-center text-2xl font-medium my-4">
              Nouvelle annonce
            </h1>

            <Formik
              initialValues={{
                title: "",
                price: "",
              }}
              validateOnChange={false}
              validate={values => {
                let errors = {}
                if (!values.title) {
                  errors.title = "Ce champ est requis"
                }
                if (!values.price) {
                  errors.price = "Ce champ est requis"
                }
                return errors
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="pb-8">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="title"
                    >
                      Titre *
                    </label>
                    <Field
                      type="text"
                      name="title"
                      placeholder="Titre"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="title" component="div" />
                  </div>

                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="price"
                    >
                      Prix
                    </label>

                    <Field
                      type="password"
                      name="price"
                      placeholder="Mot de passe"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="price" component="div" />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="form-button bg-white flex items-center bg-primary text-black uppercase hover:bg-threeGreen active:bg-fourGreen disabled:bg-disabledButton disabled:text-lightgrey-200 transition-all"
                    >
                      Publier
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default newAdvert
