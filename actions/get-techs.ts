import qs from "query-string";

import axios from "axios";

import { Tech } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/techs`;

interface Query {
    active?: boolean;
};

const getTechs = async (query: Query): Promise<Tech[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            active: query.active
        }
    });
    
    const res = await axios.get(url);

    return res.data;
};

export default getTechs;