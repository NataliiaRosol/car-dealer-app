import ErrorResult from "../../../components/ErrorResult";
import ResultCard from "../../../components/ResultCard";
import fetchData from "./../../../utils/fetchData";

export async function generateStaticParams() {
  const resultPaths = [
    { makeId: "440", yearId: "2015" },
    { makeId: "440", yearId: "2016" },
    { makeId: "441", yearId: "2016" },
  ];
  return resultPaths.map((params) => ({
    params,
  }));
}

async function ResultPage({ params }) {
  const { makeId, yearId } = await params;

  const { data, error } = await fetchData(makeId, yearId);
  

  return (
    <div className="container mx-auto p-6">
      { 
        error ? <ErrorResult error={error.message} /> : <div>
         <h1 className="text-2xl font-bold">
        Results for car id {makeId} in year {yearId}
      </h1>
      {data && data?.Results.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.Results.map((model, index) => (
            <li key={index} className="text-lg">
              <ResultCard modelName={model.Model_Name} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-3 text-2xl text-center">
          Sorry, no cars were found
        </div>
      )}

      
      </div>
      }
    </div>
  );
}

export default ResultPage;
