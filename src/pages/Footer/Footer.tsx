const Footer = () => {
  return (
    <div className="text-gray-300 font-extralight mt-60 mb-8 text-[15px]">
      © Copyright {new Date().getFullYear()}. Built by{" "}
      <a href="/" className="font-semibold underline cursor-pointer">
        Sadani Lokmane Abdelaziz
      </a>
    </div>
  );
};

export default Footer;
