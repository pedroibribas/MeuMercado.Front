import { EFilterType } from "../enums/filter-type.enum";

export interface IFilterButtonFactory {
  [EFilterType.selected]: IFilterButton,
  [EFilterType.pending]: IFilterButton,
  [EFilterType.default]: IFilterButton
};

interface IFilterButton {
  btnName: BtnName;
  setViewedProducts: () => void
}

type BtnName = 'Selecionados' | 'Pendentes' | 'Todos';

