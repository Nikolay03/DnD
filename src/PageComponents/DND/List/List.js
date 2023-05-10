import React, {useState} from 'react';
import getClassNames from "../../../utils/getClassNames";
import ListItem from "../ListItem";


const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}
const List = ({hasChild, isVisible, isRoot, parentId, array}) => {

  const [list, setList] = React.useState(array);
  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);
  const [open, setOpen] = useState(false)



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
    event.dataTransfer.setData("text/html", event.target);
    event.dataTransfer.setDragImage(event.target, 0, 0)
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
    <div className={getClassNames([!isRoot && hasChild && isVisible && parentId && 'list_child_children', hasChild && isVisible? 'list_child list_child_border' : 'list'])}>
      {list.map((item, index) => {
        const isDrop = !Boolean(open)
        return (
            <div
                key={item.id}
                style={{display: isVisible ? 'block' : 'none', cursor: isDrop ? 'pointer' : null}}
                data-position={index}
                draggable={isDrop}

                onDragStart={isDrop ? onDragStart : null}

                onDragOver={isDrop ? onDragOver : null}
                onDrop={isDrop ? onDrop : null}

                onDragLeave={isDrop ? onDragLeave : null}

                className={getClassNames(isDrop ? [dragAndDrop && dragAndDrop.draggedTo === Number(index) && "list_dropArea", dragAndDrop.isDragging && 'dragging'] : [])}
            >
              <ListItem
                  open={open}
                  setOpen={setOpen}
                  data={item}
                  parentId={parentId}
                  isDragging={dragAndDrop.isDragging}
              />
            </div>
        )
      })}
    </div>
  );
};

export default List;
