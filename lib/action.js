'use server'


import { redirect } from "next/navigation";
import { saveMeal } from "./meals"

function isInvalidtext(text){
  return !text || text.trim()==='';
}

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
      };
      if(
        isInvalidtext(meal.title) || isInvalidtext(meal.creator) || isInvalidtext(meal.summary) || isInvalidtext(meal.instructions) || isInvalidtext(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0
      ){
        throw new Error('invalid input');
      }
      await saveMeal(meal);
      //console.log(meal);
      redirect('/meals');
}