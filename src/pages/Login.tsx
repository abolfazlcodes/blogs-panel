const LoginPage = () => {
  return (
    <main className="w-full  h-svh flex items-center justify-center p-4 py-10 bg-green-100">
      <article className="w-full bg-white max-w-[540px] shadow-xl rounded-3xl p-2 gap-y-10 flex flex-col pb-10 pt-10">
        <header className="flex flex-col items-center justify-center gap-y-2">
          <figure className="relative w-20 h-20">
            <img
              src="../../public/logo.png"
              className="absolute w-full h-full object-cover"
            />
          </figure>

          <h1 className="text-lg font-semibold font-mono capitalize">
            Enjoy writing your thoughts
          </h1>
        </header>

        <form className="flex flex-col gap-y-4 px-4">
          <div className="flex flex-col gap-y-2">
            <label>Email: </label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>

          <div className="flex flex-col gap-y-2">
            <label>Password: </label>
            <input type="password" placeholder="password here" />
          </div>

          <div className="w-full mt-10">
            <button
              type="submit"
              className="bg-green-400 cursor-pointer w-full py-2 rounded-lg text-white font-bold font-mono"
            >
              Login
            </button>
          </div>
        </form>
      </article>
    </main>
  );
};

export default LoginPage;
