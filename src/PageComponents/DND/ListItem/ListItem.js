import React from 'react';
import getClassNames from "../../../utils/getClassNames";
import {Chev, Folder, Trash, Edit} from "../../../icons";
import {Grid, Item} from "../../../components/UI";
import Badge from "../../../components/Badge";
import {Fab} from "../../../components/Button/Fab";
import {Dropdown, MenuListItem} from "../../../components/Dropdown";
import List from "../List";

const getChildrenTexts = (arr) => {
  return arr.map(i => i.name).join(' / ')
}
const LabelValue = ({hasChild, withFolder, label, value}) => {
  return (
      <div>
        <div className={getClassNames(['list__item__label'])}>
          {label}
        </div>
        <div className={getClassNames(['list__item__value', hasChild ? 'list__item__value_parent' : 'list__item__value_child'])}>
          {withFolder && <Folder/>}
          {value}
        </div>
      </div>
  )
}
const ListItem = ({data, parentId, isDragging,
                    open,
                    setOpen
                  }) => {

  const id = data?.id

  const isOpen = id === open
  const children = data?.children
  const hasChild = Boolean(children)

  const childrenText = hasChild && getChildrenTexts(children)
  const numberText = parentId ? `${parentId}.${id}` : id
  return (
      <div className={'list__item'}>
        <Grid  style={{gap: '36px'}}>
          <Item xs={1}>
            <LabelValue label={'№'} value={numberText}/>
          </Item>
          <Item xs={childrenText ? 2 : 4}>
            <LabelValue label={'Название'} value={data?.name} hasChild={hasChild} withFolder/>
          </Item>
          <Item xs={childrenText ? 2 : 5}>
            <LabelValue label={'Очередность'} value={data?.order}/>
          </Item>
          {childrenText && <Item xs={5}>
            <LabelValue label={'Подкатегории'} value={childrenText}/>
          </Item>}
          <Item xs={2} className={'flex align-items-center justify-content-end'}>
            {hasChild ? (
                <Badge className={['mr-4']}>
                  {children.length}
                </Badge>
            ) : null}
            {hasChild && (
                <Fab isStroke className={['mr-2', isOpen && 'btn_fab_stroke_active']} onClick={() => setOpen(open === id ? null : id)}>
                  <Chev/>
                </Fab>
            )}
            <Dropdown>
              <MenuListItem onClick={() => null}>
                <Edit/> Редактировать
              </MenuListItem>
              <MenuListItem onClick={() => null}>
                <Trash/> Удалить
              </MenuListItem>
            </Dropdown>
          </Item>
        </Grid>
        {hasChild ? (
            <List hasChild={hasChild} array={children} parentId={id} isVisible={isOpen}/>
        ) : null}
      </div>
  );
};

export default ListItem;
