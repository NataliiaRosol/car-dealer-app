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
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${yearId}?format=json`
  );
  const data = await response.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Results for Make {makeId} in Year {yearId}
      </h1>
      <ul className="mt-4">
        {data.Results.map((model) => (
          <li key={model.Model_ID} className="text-lg">
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultPage;
