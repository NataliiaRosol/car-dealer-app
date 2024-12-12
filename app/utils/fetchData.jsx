export default async function fetchData(makeId, yearId){
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${yearId}?format=json`
    );
    const data = await response.json();
    // console.log(data.Results);
    return {data, error: null};
  } catch (error) {
    return { data: null, error: error.message };
  }
}