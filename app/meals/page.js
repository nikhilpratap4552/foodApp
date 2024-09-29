import Link from "next/link"
import classes from './page.module.css';
import Mealsgrid from "@/component/meals/mealsgrid";
import { getMeals } from "@/lib/meals";

export default async function page() {
  const meals = await getMeals();
  return (
    <>
    <header className={classes.header}>
      <h1>Delicious meals, created{''}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>choose your favorite meals. It is easy and fun</p>
      <p className={classes.cta}>
        <Link href={'/meals/share'}>
        Share Your Favorite Recipe</Link>
      </p>
      {/* <Link href={'/'}>home</Link> */}
    </header>
    <main className={classes.main}>
        <Mealsgrid meals={meals}/>
        
    </main>
    
    </>
    
    
  )
}

