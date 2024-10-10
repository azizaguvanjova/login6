const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-gradient-to-b from-[#000AFF] to-[#0235B900] absolute -bottom-32 -left-48 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-[100px] skew-y-[14deg] skew-x-6 -z-10"></div>
      <div className="bg-gradient-to-t from-[#FF0000] to-[#0236b900] absolute -top-32 -right-48 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-[100px] skew-y-[14deg] skew-x-6 -z-10"></div>

      <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-3/12 shadow-[0_3px_7px_rgba(0,0,0,0.5)] p-6 sm:p-10 flex flex-col gap-8 bg-black/50 z-50 min-w-[300px] sm:min-w-[350px] mt-12">
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textColor font-semibold mb-2">
          Login
        </h1>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="py-2 px-3 bg-[#00000080] text-lg sm:text-xl rounded-lg text-textColor placeholder-[#FFFFFF80]"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-3 bg-[#00000080] text-lg sm:text-xl rounded-lg text-textColor placeholder-[#FFFFFF80]"
          />
          <button className="uppercase rounded-lg py-3 px-4 bg-[#FFFFFF1A] text-textColor w-full sm:w-3/6 font-semibold text-xl sm:text-2xl">
            Login
          </button>
        </div>

        <div className="flex items-center">
          <hr className="flex-grow border border-[#FFFFFF80]" />
          <span className="uppercase px-2 font-semibold text-lg sm:text-2xl text-[#FFFFFFA1]">
            or
          </span>
          <hr className="flex-grow border border-[#FFFFFF80]" />
        </div>

        <div className="flex justify-around w-3/4 sm:w-1/2 mx-auto my-4">
          <a href="#" className="">
            <img src="/google.png" alt="google link" />
          </a>
          <a href="#" className="">
            <img src="/facebook.png" alt="facebook link" />
          </a>
        </div>
      </div>

      <div className="bg-[#27B902CC] absolute w-[80px] sm:w-[116px] h-[80px] sm:h-[121px] top-10 left-16 sm:left-36 polygon1 -z-10"></div>
      <div className="bg-[#27B902CC] absolute w-[80px] sm:w-[116px] h-[80px] sm:h-[121px] bottom-10 right-16 sm:right-40 polygon2 -z-10"></div>
    </div>
  );
};

export default App;
