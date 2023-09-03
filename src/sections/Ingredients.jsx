const Ingredients = () => {
    return (
        <div className="text-black font-mono justify-center mx-auto w-[700px] bg-white py-2 m-3 rounded-xl">
            <h3 className="text-3xl text-center font-extrabold py-5">Ingredients
            </h3>
            <div className="w-full">
                <ol>
                <ListItem count={1} text="2 cups of rice" />
                <ListItem count={2} text="1 onion"/>
                <ListItem count={3} text="1 red bell pepper / tatashe"/>
                <ListItem count={4} text="500ml chopped tomatoes"/>
                <ListItem count={5} text="100g tomato purée"/>
                <ListItem count={6} text="2 scotch bonnet"/>
                <ListItem count={7} text="100ml vegetable oil"/>
                <ListItem count={8} text="Maggi"/>
                <ListItem count={9} text="Salt to taste"/>
                <ListItem count={10} text="1 teaspoon curry"/>
                <ListItem count={11} text="1 teaspoon thyme"/>
                <ListItem count={12} text="1/2 teaspoon garlic"/>
                <ListItem count={13} text="1/4 teaspoon ginger"/>
                <ListItem count={14} text="2 cups water or stock"/>
                </ol>
            </div>
        </div>
    );
};

export default Ingredients;

const ListItem = ({ count, text }) => {
    return (
      <li className="text-body-color mb-4 flex text-base">
        <span className="bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded text-base text-white">
          {count}
        </span>
        {text}
      </li>
    );
  };