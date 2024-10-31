import TransactionList from "./TransactionList";

const ContentRight = () => {
  return (
    <section className="w-96 bg-white border-r shadow-md py-14 px-6">
      Right
      <div className="flex-1 h-52 border-2 rounded-lg my-3">Card</div>
      <button className="w-full py-3 mt-10 rounded border-2 border-dashed border-indigo-400 text-indigo-400">
        Add new
      </button>
      <TransactionList />
    </section>
  );
};

export default ContentRight;
