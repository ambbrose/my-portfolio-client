import qs from "query-string";

import axios from "axios";

import { Service } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/services`;

interface Query {
    active?: boolean;
};

const getServices = async (query: Query): Promise<Service[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            active: query.active
        }
    });
    
    const res = await axios.get(url);

    return res.data;
};

export default getServices;