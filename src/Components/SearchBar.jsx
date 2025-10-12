import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useWeatherAndCity } from "../Context/CityContext";
import { useEffect } from "react";

export default function GlassySearchBar() {
  const { city, setCity } = useWeatherAndCity();
  let citySchema = Yup.object().shape({
    city: Yup.string()
      .min(2, "City must be at least 2 characters")
      .required("City is required!"),
  });

  const handleCityChange = (values) => {
    const newCity = values.city.trim();
    if (newCity) {
      setCity(newCity);
      localStorage.setItem("city", newCity);
    }
    console.log("Searching for:", newCity);
  };

  let formik = useFormik({
    initialValues: {
      city: city || "",
    },
    onSubmit: handleCityChange,
    validationSchema: citySchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    validateOnMount: false,
  });

  useEffect(() => {
    console.log("Formik Errors:", formik.errors);
  }, [formik.errors]);

  return (
    <form
      className="flex items-center gap-2 w-full px-4 py-2 rounded-full 
                 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md"
      onSubmit={formik.handleSubmit}
    >
      <button type="submit">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-600 dark:text-gray-300 cursor-pointer"
        />
      </button>
      <input
        type="text"
        name="city"
        id="cityInput"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Search..."
        className="flex-1 p-1 bg-transparent outline-none focus:ring-0 focus:outline-none border-0 text-gray-700 dark:text-gray-200 placeholder-gray-400"
      />
      {formik.touched.city && formik.errors.city && (
        <p className="text-red-500 text-xs">{formik.errors.city}</p>
      )}
    </form>
  );
}
