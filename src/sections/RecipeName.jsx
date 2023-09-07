const RecipeName = () => {
  return (
    <div className="py-10 space-x-4 space-y-4 items-center">
      <div>
        <h3 className="text-orange-400 text-3xl font-mono italic font-extrabold">
          Jollof<span className="text-orange-800"> Rice</span>
        </h3>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="flex flex-nowrap items-center outline rounded box-border h-auto lg:w-1/3 w-2/3 p-4 px-1 border-4">
          <p>
            Jollof, or jollof rice, is a rice dish from West Africa. The dish is
            typically made with long-grain rice, tomatoes, onions, spices,
            vegetables and meat in a single pot, although its ingredients and
            preparation methods vary across different regions.
          </p>
        </div>
        <div className="flex flex-nowrap items-center outline rounded box-border h-auto lg:w-1/3 w-2/3 p-4 px-1 border-4">
          <p>
            Jollof rice unites nearly all of West Africa, with perhaps Nigeria
            and Ghana being the two countries best known for it. It is to West
            Africa what jambalaya is to Louisiana: a dish that is not just food
            but a cultural emblem. — Kwame Onwuachi
          </p>
        </div>
        <div className="flex flex-nowrap items-center outline rounded box-border h-auto lg:w-1/3 w-2/3 p-4 px-1 border-4">
          <p>
            For my spouse, jollof symbolizes the courage his parents had to
            leave the only home they ever knew in search of better opportunities
            in America. For me, jollof connects me to the homeland that my
            enslaved ancestors once knew. — Tonya Abari
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeName;