'use client';

import {useFormStatus} from 'react-dom';

export default function MealsFormsubmit(){
    const { status } = useFormStatus();
    return <button disabled={status}>
        {status ? 'Submitting....' : 'Share Meal'}
    </button>
}