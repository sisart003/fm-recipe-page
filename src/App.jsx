import recipeImg from './assets/images/image-omelette.jpeg';

function App() {

  return (
    <div className="m-0 flex flex-col justify-center sm:w-[450px] sm:items-center sm:bg-white sm:p-4 sm:my-8 sm:rounded-md">
      <section>
          <img src={recipeImg} alt="recipe omelette" />
          <div className='p-8 sm:p-2'>
            <h1 className='text-4xl mb-8 text-[#302d2c] font-young'>Simple Omelette Recipe</h1>
            <p className="text-[#5f574e] text-[16px] font-outfit">
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
      </section>

      <section className='bg-[#fff5fa] m-6 p-4 rounded-lg sm:mx-4 sm:w-full'>
        <h2 className='text-xl text-[#7b284f] font-bold mb-4 font-outfit'>Preparation time</h2>
        <ul className='list-disc ml-8'>
          <li className='mb-4'><span className='font-bold text-[#5f574e]'>Total:</span> Approximately 10 minutes</li>
          <li className='mb-4'><span className='font-bold text-[#5f574e]'>Preparation:</span> 5 minutes</li>
          <li className='mb-4'><span className='font-bold text-[#5f574e]'>Cooking:</span> 5 minutes</li>
        </ul>
      </section>
      
      <section className='m-8'>
        <h2 className='text-3xl font-semibold mb-4 text-[#854632]'>Ingredients</h2>
        <ul className='list-disc ml-4'>
          <li className='pl-4 mb-4 text-[#5f574e] font-medium'>2-3 large eggs</li>
          <li className='pl-4 mb-4 text-[#5f574e] font-medium'>Salt, to taste</li>
          <li className='pl-4 mb-4 text-[#5f574e] font-medium'>Pepper, to taste</li>
          <li className='pl-4 mb-4 text-[#5f574e] font-medium'>1 tablespoon of butter or oil</li>
          <li className='pl-4 mb-4 text-[#5f574e] font-medium'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </section>
      
      <hr className='mx-8' />
       
      <section className='m-8'>
      <h2 className='text-3xl font-semibold mb-4 text-[#854632] font-outfit'>Instructions</h2>
        <ul className='list-decimal ml-4'>
          <li className='pl-4 mb-4 text-[#5f574e] font-normal'>
            <span className="font-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
            You can add a tablespoon of water or milk for a fluffier texture.
          </li>
          <li className='pl-4 mb-4 text-[#5f574e] font-normal'>
            <span className="font-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className='pl-4 mb-4 text-[#5f574e] font-normal'>
            <span className="font-bold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
            the eggs evenly coat the surface.
          </li>
          <li className='pl-4 mb-4 text-[#5f574e] font-normal'>
            <span className="font-bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the 
            middle, sprinkle your chosen fillings over one half of the omelette.
          </li>
          <li className='pl-4 mb-4 text-[#5f574e] font-normal'>
            <span className="font-bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the 
            fillings. Let it cook for another minute, then slide it onto a plate.
          </li>
          <li className='pl-4 mb-4 text-[#5f574e] font-normal'>
          <span className="font-bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.
          </li>
        </ul>
      </section>

      <hr />

      <section className='m-8'>
        <h2 className='text-3xl font-semibold mb-4 text-[#854632] font-outfit'>Nutrition</h2>
        <p className="mb-4 text-[#5f574e] font-outfit">The table below shows nutritional values per serving without the additional fillings.</p>

        <div className="table w-full px-4">
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell text-center py-2 border-b-2 text-[#5f574e]">Calories</div>
            <div className="table-cell text-center py-2 border-b-2 text-[#854632] font-outfit font-semibold">277kcal</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell text-center py-2 border-b-2 text-[#5f574e]">Carbs</div>
            <div className="table-cell text-center py-2 border-b-2 text-[#854632] font-outfit font-semibold">0g</div>
          </div>
          <div className="table-row">
            <div className="table-cell text-center py-2 border-b-2 text-[#5f574e]">Protein</div>
            <div className="table-cell text-center py-2 border-b-2 text-[#854632] font-outfit font-semibold">20g</div>
          </div>
          <div className="table-row">
            <div className="table-cell text-center py-2 text-[#5f574e]">Fat</div>
            <div className="table-cell text-center py-2 text-[#854632] font-outfit font-semibold">22g</div>
          </div>
        </div>
      </div>
      </section>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  )
}

export default App
