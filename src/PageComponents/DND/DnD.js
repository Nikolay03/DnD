import React from 'react';
import List from "./List";
import './dnd.scss'
import Badge from "../../components/Badge";

const list = [
  {
    id: 1,
    name: 'Mastercard',
    order: 1,
    children: [
      {
        id: 1,
        name: 'Максимал фойда (Нац. валюта)',
        order: 1
      },
      {
        id: 2,
        name: 'On-line (Нац. валюта)',
        order: 2
      },
      {
        id: 3,
        name: 'Аванс (Нац. валюта)',
        order: 3
      },
      {
        id: 4,
        name: 'Максимал фойда (Ин. валюта)',
        order: 4
      }
    ]
  },
  {
    id: 2,
    name: 'вклады',
    order: 2,
    children: [
      {
        id: 1,
        name: 'On-line (Ин. валюта)',
        order: 1
      },
      {
        id: 2,
        name: 'Аванс (Ин. валюта)',
        order: 2
      },
      {
        id: 3,
        name: 'Mastercard',
        order: 3
      },
      {
        id: 4,
        name: 'On-line (Нац. валюта)',
        order: 4
      }
    ]
  },
  {
    id: 3,
    name: 'Кредиты',
    order: 3,
    children: [
      {
        id: 1,
        name: 'Test',
        order: 1
      },
      {
        id: 2,
        name: 'Mastercard',
        order: 2,
        children: [
          {
            id: 1,
            name: 'Кредиты',
            order: 1
          },
          {
            id: 2,
            name: 'Mastercard max Mastercard max  Mastercard max  Mastercard max  Mastercard max ',
            order: 2
          }
        ]
      },
      {
        id: 3,
        name: 'Аванс (Нац. валюта)',
        order: 3
      },
      {
        id: 4,
        name: 'Mastercard',
        order: 4
      }
    ]
  }
]
const DnD = () => {
  return (
      <>
        <div className={'flex align-items-center header'}>
          <h1>Список тем обращения и продуктов</h1>
          <Badge className={['badge_text']}>
            Найдено {list.length}
          </Badge>
        </div>
        <List array={list} isVisible={true} isRoot/>
      </>
  );
};

export default DnD;
