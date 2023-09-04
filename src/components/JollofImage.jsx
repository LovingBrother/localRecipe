const JollofImage = () => {
    return (
      <div className="py-10 space-x-4 space-y-4">
        <div>
          <h3 className="text-orange-400 text-3xl font-mono italic font-extrabold">
            <span className="text-orange-800"> Photos</span>
          </h3>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-nowrap outline rounded box-border h-42 w-1/3 p-4 .px-1 border-4">
          <img
          src="../assets/Jollof-Rice-1.webp"
          className="h-auto max-w-full rounded-lg"
          alt="" />
          </div>
          <div className="flex flex-nowrap outline rounded box-border h-42 w-1/3 p-4 .px-1 border-4">
          <img
          src="../assets/Jollof-Rice-2.webp"
          className="h-auto max-w-full rounded-lg"
          alt="" />
          </div>
          <div className="flex flex-nowrap outline rounded box-border h-42 w-1/3 p-4 .px-1 border-4">
          <img
          src="../assets/Jollof-Rice-3.jpg"
          className="h-auto max-w-full rounded-lg"
          alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default JollofImage;