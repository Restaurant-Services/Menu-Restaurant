import { Promo, Subtext, Style } from '../promo';

export const PROMOS: Promo[] = [
  new Promo(
    'ALL YOU CAN EAT',
    [
      new Subtext('Al tavolo potete ordinare tutto quello che riuscirete a mangiare pagando un prezzo fisso '),
      new Subtext('(dolci e bevande non sono inclusi), '),
      new Subtext('si consiglia di fare tanti piccoli ordini, '),
      new Subtext('vietati gli sprechi', Style.underline),
      new Subtext('!')
      ]
  ),
  new Promo(
    'ASPORTO',
    [
      new Subtext('Tutti gli acquisti da asporto sono scontati del 20%, '),
      new Subtext('per grandi ordini sono previsti sconti maggiori'),
      new Subtext('!')
    ]
  )
];

PROMOS.forEach((promo: Promo, index: number) => {
  promo.id = index;
});
