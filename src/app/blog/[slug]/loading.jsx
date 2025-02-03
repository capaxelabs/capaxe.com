import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <article className="container max-w-4xl py-6 lg:py-32 ">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4 mb-10">
          <Skeleton className="h-[38px] w-[90px]" />
        </div>
      </div>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <Skeleton className="h-[38px] w-[90px]" />
          <Skeleton className="h-[38px] w-[80px]" />
        </div>
        <div className="mx-auto w-[800px] space-y-6">
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[20px] w-2/3" />
          <Skeleton className="h-[20px] w-full" />
          <Skeleton className="h-[20px] w-full" />
        </div>
      </div>
    </article>
  )
}
