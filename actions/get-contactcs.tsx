import qs from "query-string";

import axios from "axios";

import { Contact } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;

interface Query {
    active?: boolean;
    urlType?: boolean;
};

const getContacts = async (query: Query): Promise<Contact[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            active: query.active,
            urlType: query.urlType
        }
    });
    
    const res = await axios.get(url);

    return res.data;
};

export default getContacts;