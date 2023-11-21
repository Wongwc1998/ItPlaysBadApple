import * as z from "zod"

export const itemSchema = z.object({
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  description: z.string().optional(),
  tags: z.string().optional().nullable(),
}
)

export const filterItemsSchema = z.object({
  query: z.string(),
})

export const getItemSchema = z.object({
  id: z.number(),
  authorId: z.number(),
})

export const getItemsSchema = z.object({
  limit: z.number().default(10),
  offset: z.number().default(0),
  tags: z
    .string()
    .regex(/^\d+.\d+$/)
    .optional()
    .nullable(),
  sort: z
    .string()
    .regex(/^\w+.(asc|desc)$/)
    .optional()
    .nullable(),
  authorId: z
    .string()
    .regex(/^\d+.\d+$/)
    .optional()
    .nullable(),
})
