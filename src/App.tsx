import { List } from "phosphor-react";
import { CircleNotch } from "phosphor-react";
import { Button } from "./components/Button.tsx";
import { Column } from "./components/Column";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[75%] py-16 sm:px-4 lg:px-16 flex flex-col gap-16">
        <div className="w-[80%] text-white flex flex-col gap-2">
          <h1 className="font-inter font-bold text-3xl">Tipos de botão</h1>
          <p className="font-roboto text-xl opacity-50">
            Dentro de um layout, botões servem para destacar ações importantes a
            serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
          </p>
        </div>
        <Table />
      </div>

      <div className="w-[27%] h-full bg-[#130F1E] fixed right-0 flex flex-col gap-12 py-24 px-8">
        <div className="text-white flex flex-col gap-2">
          <h1 className="font-inter font-bold text-3xl">Teste os botões</h1>
          <span className="font-roboto text-[19.21px] opacity-50">
            Interaja com os botões e observe a mudança de aparência e de
            cursores
          </span>
        </div>
        <div className="w-full flex flex-col gap-8">
          <Button placeholder="INTERAJA COMIGO" />
          <Button
            placeholder="INTERAJA INTERAJA COMIGO"
            typeButton="SECONDARY"
            disabled
          />
          <Button
            placeholder="INTERAJA COMIGO"
            typeButton="TERTIARY"
            icon={<List size={16} />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
