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
        name: 'Mastercard',
        order: 1
      },
      {
        id: 2,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 3,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 4,
        name: 'Mastercard',
        order: 1
      }
    ]
  },
  {
    id: 2,
    name: 'Mastercard',
    order: 1,
    children: [
      {
        id: 1,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 2,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 3,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 4,
        name: 'Mastercard',
        order: 1
      }
    ]
  },
  {
    id: 3,
    name: 'Mastercard',
    order: 1,
    children: [
      {
        id: 1,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 2,
        name: 'Mastercard max Mastercard max  Mastercard max  Mastercard max  Mastercard max ',
        order: 1
      },
      {
        id: 3,
        name: 'Mastercard',
        order: 1
      },
      {
        id: 4,
        name: 'Mastercard',
        order: 1
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
        <List array={list} isVisible={true}/>
      </>
  );
};

export default DnD;
