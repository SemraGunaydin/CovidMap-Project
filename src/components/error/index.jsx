const Error = ({info, refetch}) => {
  return (
    <div
      data-testid="error"
      className="col-span-3 my-20 flex flex-col justify-center text-center gap-10">
      <div>
        <p className="bg-red-400 p-5 rounded-md">
          Sorry unexpected error occured
        </p>
        <p>{info}</p>
      </div>
	  <button onClick={refetch} 
	  className="border shadow mt-10 text-black p-2">Try again</button>
    </div>
  );
};

export default Error;
