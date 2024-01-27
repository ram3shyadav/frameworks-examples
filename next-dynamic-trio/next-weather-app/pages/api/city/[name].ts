import CityData from "@/interfaces/city";
import type { NextApiRequest, NextApiResponse } from "next";
import cities from "@/lib/city.list.json";


const Cities = cities as CityData[];
const NUM_SUGGESTIONS = 5;

function searchCities(value: string):CityData[] {
    return Cities.filter(city => 
        city.name.toLowerCase().startsWith(value.toLowerCase())
    ).slice(0, NUM_SUGGESTIONS)
}

export default function handler(
    {query: {name}}: NextApiRequest,
    res: NextApiResponse,
) {
    const cityName = Array.isArray(name) ? name.join('') : name;

    const filteredCities = cityName ? searchCities(cityName) : []

    res.status(200).json({
        cities: filteredCities
    });
}