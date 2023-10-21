import qs from "query-string";

import axios from "axios";

import { Project } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/search`;

interface Query {
    active?: boolean;
    searchParam?: string;
};

const getSearchResult = async (query: Query): Promise<Project[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            active: query.active,
            searchParam: query.searchParam
        }
    });

    const res = await axios.get(url);

    return res.data;
};

export default getSearchResult;