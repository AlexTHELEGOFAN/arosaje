import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import * as React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { toast } from "react-toastify"

function newAdvert() {
  //   const { setCurrentUser } = useContext(UserContext)

  // Handle login Formik
  const handleSubmit = values => {
    // axios
    //   .post(
    //     `${UrlAPI}/api/Token?password=${values.username}&username=${values.password}`,
    //     {
    //       headers: config,
    //     }
    //   )
    //   .then((res) => {

    navigate("/home")
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error("Erreur lors de la création de l'annonce", {
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
                desc: "",
                picture: "",
                plantName: "",
                plantSpecies: "",
                address: "",
              }}
              validateOnChange={false}
              validate={values => {
                let errors = {}
                if (!values.title) {
                  errors.title = "Ce champ est requis"
                }
                if (!values.desc) {
                  errors.desc = "Ce champ est requis"
                }
                if (!values.picture) {
                  errors.picture = "Ce champ est requis"
                }
                if (!values.plantName) {
                  errors.plantName = "Ce champ est requis"
                }
                if (!values.plantSpecies) {
                  errors.plantSpecies = "Ce champ est requis"
                }
                if (!values.address) {
                  errors.address = "Ce champ est requis"
                }
                return errors
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Titre ---------------------------------- */}
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
                      placeholder="Titre *"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="title" component="div" />
                  </div>

                  {/* Description ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="desc"
                    >
                      Description *
                    </label>
                    <Field
                      type="text"
                      name="desc"
                      placeholder="Description"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="desc" component="div" />
                  </div>

                  {/* Image ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="picture"
                    >
                      Image *
                    </label>
                    <Field
                      type="file"
                      name="picture"
                      placeholder=""
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="picture" component="div" />
                  </div>

                  {/* Nom de la plante ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="plantName"
                    >
                      Nom de la plante *
                    </label>
                    <Field
                      type="text"
                      name="plantName"
                      placeholder="Nom de la plante"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="plantName" component="div" />
                  </div>

                  {/* Espèce de la plante ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="plantSpecies"
                    >
                      Espèce de la plante *
                    </label>
                    <Field
                      type="text"
                      name="plantSpecies"
                      placeholder="Nom de la plante"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="plantSpecies" component="div" />
                  </div>

                  {/* Adresse ---------------------------------- */}
                  <div className="pb-8 text-left relative">
                    <label
                      className="flex text-left text-black text-sm mb-1"
                      htmlFor="address"
                    >
                      Adresse *
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Adresse"
                      className="w-[250px] md:w-full justify-center login-field"
                    />
                    <ErrorMessage name="address" component="div" />
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
