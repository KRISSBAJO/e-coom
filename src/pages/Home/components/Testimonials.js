export const Testimonials = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Customer Reviews </h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Driving in luxury</h3>
                      <p className="my-4 italic font-light">"I never truly experienced luxury driving until I purchased from Exotic Cars. Every journey feels like a first-class experience now."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Jason Bajo</div>
                          <div className="text-sm  italic font-light text-gray-500 dark:text-gray-400">Business Owner at Elite Enterprises</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg  italic font-semibold text-gray-900 dark:text-white">The definition of performance</h3>
                      <p className="my-4 font-light">"Their selection of performance cars is unmatched. My new car not only looks amazing but drives like a dream."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Nathan A</div>
                          <div className="text-sm italic font-light text-gray-500 dark:text-gray-400">Car Enthusiast at SpeedLovers</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Best car investment</h3>
                      <p className="my-4 italic font-light">"The quality and service at  LogaXP Exotic Cars stand out. It’s a purchase I proudly speak of."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Riley O</div>
                          <div className="text-sm font-light italic text-gray-500 dark:text-gray-400">Investor at Drive Ventures</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Seamless Buying Experience</h3>
                      <p className="my-4 italic font-light">"The team at LogaXp Exotic Cars truly understands customer service."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Omoye O</div>
                          <div className="text-sm font-light italic text-gray-500 dark:text-gray-400">Director at Roadways Inc.</div>
                      </div>
                  </figcaption>    
              </figure>

          </div>
      </section>
    )
  }