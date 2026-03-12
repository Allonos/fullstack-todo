const TodoDetailSkeleton = () => {
  return (
    <section className="w-full">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="h-3.5 w-20 bg-gray-200 animate-pulse rounded-full" />
      </div>

      <div className="mt-5 bg-white rounded-2xl shadow-md">
        <div className="px-6 py-3 flex items-center gap-2 rounded-t-2xl bg-gray-50 border-b border-gray-100">
          <div className="h-5 w-20 bg-gray-200 animate-pulse rounded-full" />
        </div>
        <div className="w-full bg-gray-200 h-px" />

        <div className="px-4 sm:px-8 py-5 sm:py-8 flex flex-col gap-4">
          <div className="h-7 w-3/5 bg-gray-200 animate-pulse rounded-full" />

          <div className="flex flex-wrap gap-3 items-center">
            <div className="h-6 w-28 bg-gray-200 animate-pulse rounded-full" />
            <div className="h-4 w-40 bg-gray-100 animate-pulse rounded-full" />
          </div>

          <div className="p-5 bg-[#F9FAFB] rounded-lg flex flex-col gap-3">
            <div className="h-3.5 w-24 bg-gray-200 animate-pulse rounded-full" />
            <div className="flex flex-col gap-2">
              <div className="h-3.5 w-full bg-gray-200 animate-pulse rounded-full" />
              <div className="h-3.5 w-4/5 bg-gray-200 animate-pulse rounded-full" />
              <div className="h-3.5 w-2/3 bg-gray-200 animate-pulse rounded-full" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="h-11 sm:flex-2 bg-gray-200 animate-pulse rounded-2xl" />
            <div className="h-11 sm:flex-1 bg-gray-100 animate-pulse rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoDetailSkeleton;
