import qs from "query-string";

import axios from "axios";

import { Project } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects`;

interface Query {
    active?: boolean;
    take?: number;
    skip?: number;
    searchParam?: string;
};

const getProjects = async (query: Query): Promise<Project[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            active: query.active,
            take: query.take,
            skip: query.skip,
            // searchParam: query.searchParam
        }
    });

    const res = await axios.get(url);

    return res.data;
};

export default getProjects;