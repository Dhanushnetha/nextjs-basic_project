import Link from "next/link";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drink.jpg'
import Image from "next/image";
// console.log(drinkImg)
const getSingleDrink = async(id)=>{
    const response = await fetch(`${url}${id}`)
    if(!response.ok){
        throw new Error('Failed to fetch a drink...');
    }
    return response.json();
}

const SingleDrinkPage = async ({params}) => {
    const data = await getSingleDrink(params.id);
    // console.log(data?.drinks[0]?.strDrink)
    // console.log(data?.drinks[0]?.strDrinkThumb)
  return (
    <div>
        <Link href={'/drinks'} className="btn btn-primary mt-8 mb-12">
            Back to drinks
        </Link>
        <Image src={data?.drinks[0]?.strDrinkThumb} width={300} height={300} className="w-48 h-48 rounded-lg shadow-lg mb-4" priority alt={data?.drinks[0]?.strDrink}/>
        {/* <Image src={drinkImg.src} className="w-48 h-48 rounded-lg" alt="drink" width={300} height={300}/> */}
        <h1 className="text-4xl mb-8">{data?.drinks[0]?.strDrink}</h1>
    </div>
  )
}

export default SingleDrinkPage