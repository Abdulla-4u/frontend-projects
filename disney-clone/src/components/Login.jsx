
const Login = () => {
  return (
    <div className="relative bg-zinc-800 min-h-screen w-full bg-[url(/images/login-background.jpg)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <section className="text-white box-shadow-lg p-4 sm:p-0 max-w-md lg:max-w-xl w-full flex flex-col items-center justify-center text-center ">
        <img
          src="/images/cta-logo-one.svg"
          className="max-w-xl w-full object-cover"
          alt="cta-logo"
        />
        <button className="w-full bg-[#0063e5] text-[#f9f9f9] border border-transparent text-lg font-bold uppercase tracking-[1.5px] py-3.5 px-8 rounded-md mt-3 cursor-pointer hover:bg-[#0483ee] transition duration-300 ease-in-out">
          Get all there
        </button>
        <p className="my-5 text-[12px] text-[#f3f3f3] leading-[1.6] tracking-wide">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          src="/images/cta-logo-two.png"
          className="max-w-fu "
          alt="cta-logo"
        />
      </section>
    </div>
  );
};

export default Login;
