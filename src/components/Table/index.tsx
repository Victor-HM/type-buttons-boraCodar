import { Button } from "../Button.tsx";
import { Column } from "../Column";
import cursorDefault from "../../assets/cursorDefault.svg";
import cursorBlock from "../../assets/cursorBlock.png";
import cursorWait from "../../assets/cursorWait.svg";
import cursorMove from "../../assets/cursorMove.svg";
import { CircleNotch, List } from "phosphor-react";

export function Table() {
  return (
    <div className="w-full h-full bg-[#1C162C] rounded-lg grid grid-cols-[repeat(5,auto)] grid-rows-[repeat(7,minmax(0,1fr))] pb-2 px-2 text-white">
      <div></div>
      <Column placeholder="BOTÂO PRIMÁRIO" />
      <Column placeholder="BOTÂO SECUNDÁRIO" />
      <Column placeholder="BOTÂO TERCIÁRIO" />
      <Column placeholder="CURSOR" />
      <Column placeholder="DEFAULT" />
      <Column background="#0B0911">
        <Button placeholder="DEFAULT PRIMARY" />
      </Column>
      <Column background="#0B0911">
        <Button placeholder="DEFAULT SECONDARY" typeButton="SECONDARY" />
      </Column>
      <Column background="#0B0911">
        <Button placeholder="DEFAULT TERTIARY" typeButton="TERTIARY" />
      </Column>
      <Column background="#0B0911">
        <img src={cursorDefault} alt="cursor do mouse no formato padrão" />
      </Column>

      <Column placeholder="HOVER" />
      <Column background="#0B0911">
        <Button placeholder="HOVER PRIMARY" hover={true} />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="HOVER SECONDARY"
          typeButton="SECONDARY"
          hover={true}
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="HOVER TERTIARY"
          typeButton="TERTIARY"
          hover={true}
        />
      </Column>
      <Column background="#0B0911">
        <img src={cursorDefault} alt="cursor do mouse no formato padrão" />
      </Column>

      <Column placeholder="FOCUS" />
      <Column background="#0B0911">
        <Button placeholder="FOCUS PRIMARY" focus={true} />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="FOCUS SECONDARY"
          typeButton="SECONDARY"
          focus={true}
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="FOCUS TERTIARY"
          typeButton="TERTIARY"
          focus={true}
        />
      </Column>
      <Column background="#0B0911">
        <img src={cursorDefault} alt="cursor do mouse no formato padrão" />
      </Column>

      <Column placeholder="DISABLED" />
      <Column background="#0B0911">
        <Button placeholder="DISABLED PRIMARY" disabled cursor="not-allowed" />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="DISABLED SECONDARY"
          typeButton="SECONDARY"
          disabled
          cursor="not-allowed"
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="DISABLED TERTIARY"
          typeButton="TERTIARY"
          disabled
          cursor="not-allowed"
        />
      </Column>
      <Column background="#0B0911">
        <img src={cursorBlock} alt="cursor do mouse no formato padrão" />
      </Column>

      <Column placeholder="LOADING" />
      <Column background="#0B0911">
        <Button
          placeholder="LOADING PRIMARY"
          cursor="wait"
          icon={<CircleNotch size={16} />}
          animation={true}
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="LOADING SECONDARY"
          typeButton="SECONDARY"
          cursor="wait"
          icon={<CircleNotch size={16} />}
          animation={true}
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="LOADING TERTIARY"
          typeButton="TERTIARY"
          cursor="wait"
          icon={<CircleNotch size={16} />}
          animation={true}
        />
      </Column>
      <Column background="#0B0911">
        <img src={cursorWait} alt="cursor do mouse no formato padrão" />
      </Column>

      <Column placeholder="MOVABLE" />
      <Column background="#0B0911">
        <Button
          placeholder="MOVABLE PRIMARY"
          cursor="move"
          icon={<List size={16} />}
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="MOVABLE SECONDARY"
          typeButton="SECONDARY"
          cursor="move"
          icon={<List size={16} />}
        />
      </Column>
      <Column background="#0B0911">
        <Button
          placeholder="MOVABLE TERTIARY"
          typeButton="TERTIARY"
          cursor="move"
          icon={<List size={16} />}
        />
      </Column>
      <Column background="#0B0911">
        <img src={cursorMove} alt="cursor do mouse no formato padrão" />
      </Column>
    </div>
  );
}
