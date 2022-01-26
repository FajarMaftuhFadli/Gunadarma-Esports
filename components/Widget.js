/**
 * "Create a fixed position element that is always visible on the screen."
 * @returns A div with the className of "fixed w-10 h-10 bottom-5 right-5 z-50 rounded-full ring-2
 * ring-white shadow-md bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-teal-
 */
export default function Widget() {
  return (
    <div className="fixed w-10 h-10 bottom-5 right-5 z-50 rounded-full ring-2 ring-white shadow-md bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-teal-400 xl:bg-yellow-400 2xl:bg-indigo-400">
      <div className="w-full h-full flex justify-center items-center g-text-c4 drop-shadow-md before:block before:sm:content-['SM'] before:md:content-['MD'] before:lg:content-['LG'] before:xl:content-['XL'] before:2xl:content-['2XL']"></div>
    </div>
  );
}
