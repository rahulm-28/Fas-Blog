import Banner from "../../Components/Banner";

function BlogSection() {
  return (
    <div>
      <Banner
        title="Fas-Blog!"
        subtitle="Discover a world of insightful articles."
      />
      <div className="flex flex-col flex-grow items-center md:justify-between lg:px-4 lg:py-2">
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 lg:mt-0">
          <article className="flex flex-col overflow-hidden rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
                alt=""
                className="object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex items-center">
                <time
                  className="mr-2 text-xs text-gray-500"
                  dateTime="2020-03-16"
                >
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="px-2 py-1 text-xs font-semibold leading-none text-blue-500 bg-blue-100 rounded"
                >
                  Marketing
                </a>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href="#" className="hover:underline">
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi...
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    Michael Foster
                  </p>
                  <p className="text-xs text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
                alt=""
                className="object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex items-center">
                <time
                  className="mr-2 text-xs text-gray-500"
                  dateTime="2020-03-16"
                >
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="px-2 py-1 text-xs font-semibold leading-none text-blue-500 bg-blue-100 rounded"
                >
                  Marketing
                </a>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href="#" className="hover:underline">
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi...
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    Michael Foster
                  </p>
                  <p className="text-xs text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
                alt=""
                className="object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex items-center">
                <time
                  className="mr-2 text-xs text-gray-500"
                  dateTime="2020-03-16"
                >
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="px-2 py-1 text-xs font-semibold leading-none text-blue-500 bg-blue-100 rounded"
                >
                  Marketing
                </a>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href="#" className="hover:underline">
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi...
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    Michael Foster
                  </p>
                  <p className="text-xs text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
                alt=""
                className="object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex items-center">
                <time
                  className="mr-2 text-xs text-gray-500"
                  dateTime="2020-03-16"
                >
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="px-2 py-1 text-xs font-semibold leading-none text-blue-500 bg-blue-100 rounded"
                >
                  Marketing
                </a>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href="#" className="hover:underline">
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi...
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    Michael Foster
                  </p>
                  <p className="text-xs text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
                alt=""
                className="object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex items-center">
                <time
                  className="mr-2 text-xs text-gray-500"
                  dateTime="2020-03-16"
                >
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="px-2 py-1 text-xs font-semibold leading-none text-blue-500 bg-blue-100 rounded"
                >
                  Marketing
                </a>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href="#" className="hover:underline">
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi...
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    Michael Foster
                  </p>
                  <p className="text-xs text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
