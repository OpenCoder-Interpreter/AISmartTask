import TypewriterComponent from "typewriter-effect";
import HomeButton from "./HomeButton";

function Welcome() {
  return (
    <div className="bg-slate-700 w-full my-5 py-2 flex-box">
      <div className="flex-box w-full flex-col md:flex-row my-6">
        <div className="text-center overflow-hidden w-full py-10 flex-box flex-col scroll-smooth">
          <div className="flex-box w-full overflow-hidden">
            <div className="flex-box">
              <div className="px-6 text-center text-white md:px-12 font-Bruno flex-box flex-col">
                <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-5xl pb-6 font-extrabold sm:text-5xl">


                  Welcome <br /> in


                  <h2 className="text-5xl text-firstLogo drop-shadow-sm shadow-black">
                    AISmart
                    <span className="text-altLogo">Task</span>

                  </h2>
                </h1>
                <p className="max-w-2xl mb-6  font-light text-primary lg:mb-8 md:text-lg lg:text-xl">
                  Say goodbye to manual code creation! Our
                  AI-powered technology ensures precise and efficient
                  code generation. Join the revolution and experience the
                  future of OpenInterpreter with AISmartTask
                  .
                </p>
                <h2 className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-2xl pb-6 font-bold text-transparent lg:text-2xl">
                  <TypewriterComponent
                    options={{
                      strings: [
                        "#AISmartTask",
                        "#TaskManager",
                        "#AISmartBot",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>

                <HomeButton />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-box p-4">
          <div className="flex-box">
            <div className="mx-3">
              <img
                className="logo rounded-full inline-block w-screen p-8 md:p-0"
                src="Dynamic_Task_Management.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
