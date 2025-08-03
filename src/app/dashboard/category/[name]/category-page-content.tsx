"use client"

import { EventCategory } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

interface CategoryPageContentProps{
    hasEvents: boolean,
    category: EventCategory
}

export const CategoryPageContent= ({hasEvents : initialhasEvents, category} : CategoryPageContentProps) => {
    const { data: pollingData } = useQuery({
        queryKey: ["category", category.name, "hasEvents"],
        initialData: { hasEvents: initialhasEvents}
    })

    if(!pollingData.hasEvents){
        return <EmptyCategoryState />
    }
}