import PropTypes from "prop-types";

export default function DayWeatherCard({ dayWeather = [], dayName = "Sun" }) {
  return (
    <>
      <div className="font-semibold capitalize text-xs md:text-sm card_bg w-full text-gray-500 bg-secondary-light dark:text-gray-100 flex flex-col items-center justify-center py-5">
        <p className=" text-main">{dayName}</p>
        <img
          className="w-3/4 rounded-t-lg block align-middle"
          src={dayWeather?.day?.condition?.icon}
          alt="weather icon"
        />
        <p>{dayWeather?.day?.avgtemp_c}&deg;</p>
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
