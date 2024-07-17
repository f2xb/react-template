import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="space-y-10 flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="flex space-x-5">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
          </a>
        </div>
        <div className="font-medium text-xl">
          <h1>Vite + React + Tailwind</h1>
        </div>
      </div>
    </>
  );
}

export default App;
