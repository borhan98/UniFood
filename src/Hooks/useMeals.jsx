import { useEffect, useState } from "react";


const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("./meals.json")
        .then(res => res.json())
        .then(data => setMeals(data));
    }, [])

    return [meals]
};

export default useMeals;