const SkeletonRow = ({ last }: { last: boolean }) => (
  <>
    <div className="flex justify-between items-center gap-2 px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse shrink-0" />
        <div className="flex flex-col gap-1.5">
          <div className="h-3.5 w-40 bg-gray-200 animate-pulse rounded-full" />
          <div className="h-2.5 w-24 bg-gray-100 animate-pulse rounded-full" />
        </div>
      </div>
      <div className="h-5 w-12 bg-gray-200 animate-pulse rounded-full" />
    </div>
    {!last && <div className="w-full bg-gray-200 h-px" />}
  </>
);

const TodoListSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <section className="bg-white rounded-xl mt-5">
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonRow key={i} last={i === rows - 1} />
      ))}
    </section>
  );
};

export default TodoListSkeleton;
