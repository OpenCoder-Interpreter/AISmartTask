const Contact = () => {
    return (
      <div
        className="bg-slate-800 flex flex-row items-center justify-center w-full gap-20 h-[240px] mt-40"
        style={{ boxShadow: "0px 4px 88px 22px #281818" }}
      >
        <div className="text-secondText mr-10 font-bold text-lg	">
          Please feel free to get in touch with us
        </div>
        <div className="flex flex-col text-secondText">
          <p className="font-semibold	">How can we help?</p>
          <p className="m-1">+212 50 000 0000</p>
          <p>sonic.meow@gmail.com</p>
        </div>
      </div>
    );
  };
  
  export default Contact;