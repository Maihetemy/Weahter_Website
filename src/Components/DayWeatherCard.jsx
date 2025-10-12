import PropTypes from "prop-types";

export default function DayWeatherCard({ dayWeather = [], dayName = "Sun" }) {
  return (
    <>
      <div className="w-full shadow-lg text-gray-500 bg-secondary-light dark:bg-secondary-dark dark:text-gray-100 h-48 rounded-2xl flex flex-col items-center justify-center">
        <p className="font-semibold capitalize text-main">{dayName}</p>
        <img
          className="p-8 rounded-t-lg"
          src={dayWeather?.day?.condition?.icon}
          alt="weather icon"
        />
        <p className="font-semibold capitalize">
          {dayWeather?.day?.avgtemp_c}&deg;
        </p>
      </div>

      <div />
    </>
  );
}

DayWeatherCard.propTypes = {
  day: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      day: PropTypes.shape({
        avgtemp_c: PropTypes.number.isRequired,
        condition: PropTypes.shape({
          icon: PropTypes.string.isRequired,
        }).isRequired,
      }),
    })
  ).isRequired,
};
// [0].day.condition.icon
// [0].day.avgtemp_c;
