export default function DayWeatherCard() {
  return (
    <div
      className="w-full shadow-lg text-gray-500 bg-secondary-light dark:bg-secondary-dark dark:text-gray-100 h-48
    dark:bg- rounded-2xl flex flex-col items-center justify-center"
    >
      <p className=" font-semibold capitalize text-main"> mon</p>
      <img
        className="p-8 rounded-t-lg"
        src="/docs/images/products/apple-watch.png"
        alt="product image"
      />
      <p className="font-semibold capitalize">14&deg;</p>
    </div>
  );
}
