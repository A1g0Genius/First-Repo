import getWikiResult from "@/lib/getWikiResult"
import { Metadata } from "next"
import Item from "./components/Item"

type Props = {
    params: {
        searchTerm: string
    }
}

export function generateMetadata({ params: { searchTerm } }:Props) {
    return {
        title:`${searchTerm}: Search Text`
    }
}

export default async function page({ params: { searchTerm } }: Props) {
  
  const searchTermResult: Promise<SearchResult> = getWikiResult(searchTerm)
  const data = await searchTermResult
  
  const results: Result[] | undefined = data?.query?.pages
  
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results
                ? Object.values(results).map(result => {
                    return <Item key={result.pageid} result={result} />
                })
                : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            }
        </main>
  )
  return content
}