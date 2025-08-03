import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const EmptyCategoryState = ({
  categoryName,
}: {
  categoryname: string
}) => {
    const router = useRouter()

    const {data} = useQuery({
        queryKey: ["category", categoryName, "hasEvents" ],
        queryFn: async () => {
            const res = await client.category
        }
    })
}
