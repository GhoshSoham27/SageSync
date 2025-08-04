import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/categories-validator";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const REQUEST_VALIDATOR = z.object({
    category: CATEGORY_NAME_VALIDATOR,
    fields: z.record(z.string().or(z.number()).or(z.boolean())).optional(),
    description: z.string().optional(),
})
.strict()

export const POST = async (req: NextRequest) => {
    const authHeader = req.headers.get("Authorization")
    if(!authHeader){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }
}