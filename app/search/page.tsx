import getSearchResult from "@/actions/get-search";
import SearchClient from "@/components/ui/search-client";

const SearchResultPage = async (
    { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }
) => {

    const searchParam = searchParams['searchParam'] as string;

    const searcResult = await getSearchResult({
        active: true,
        searchParam: searchParam
    });

    console.log('RESULT:- ', searcResult)

    return (
        <div className="h-full w-full sm:py-16 max-w-7xl mx-auto mt-10 sm:mt-0 relative">
            <SearchClient 
                searchResult={searcResult}
                searchParam={searchParam}
            />
        </div>
    );
};

export default SearchResultPage;