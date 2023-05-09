import React, {useRef} from 'react';
import getClassNames from "../../../utils/getClassNames";
import ListItem from "../ListItem";


const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}
const List = ({children, hasChild, parentId, array}) => {

  const ref = useRef(null)

  const [list, setList] = React.useState(array);
  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);


  // onDragStart fires when an element
  // starts being dragged
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list
    });


    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", '');
  }

  // onDragOver fires when an element being dragged
  // enters a droppable area.
  // In this case, any of the items on the list
  const onDragOver = (event) => {

    // in order for the onDrop
    // event to fire, we have
    // to cancel out this one
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)
    ];

    if (draggedTo !== dragAndDrop.draggedTo){
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo
      })
    }

  }

  const onDrop = (event) => {

    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  }


  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null
    });

  }

  return (
    <div className={getClassNames([hasChild ? 'list_child' : 'list'])}>
      {list.map((item, index) => (
          <div
              ref={ref}
              key={index}

              data-position={index}
              draggable

              onDragStart={onDragStart}

              onDragOver={onDragOver}
              onDrop={onDrop}

              onDragLeave={onDragLeave}

              className={getClassNames([dragAndDrop && dragAndDrop.draggedTo === Number(index) && "list_dropArea", dragAndDrop.isDragging && 'dragging'])}
          >
            <ListItem data={item} parentId={parentId} isDragging={dragAndDrop.isDragging}/>
          </div>
      ))}
    </div>
  );
};

export default List;
