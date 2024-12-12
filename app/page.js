import VehicleMakes from "./components/VehicleMakes";
import ModelYear from "./components/ModelYear";
import NextButton from "./components/NextButton";

// metadata

export default function Home() {
  return (
    <main className="">
      <h1 className="text-center text-3xl mt-6">Car Dealer App</h1>
      <VehicleMakes />
      <ModelYear />
      <NextButton />
    </main>
  );
}
