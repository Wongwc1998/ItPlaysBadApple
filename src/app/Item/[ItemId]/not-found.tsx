import { ErrorCard } from "@/components/cards/error-card"
import { Shell } from "@/components/shells/shell"

export default function ProductNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Item not found"
        description="The item you are looking for does not exist."
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  )
}
