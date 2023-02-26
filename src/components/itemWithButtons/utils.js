export const editTreeItem = (tree, itemId, newItem) => {
  if (tree.id === itemId) {
    return newItem;
  }

  if (tree.children) {
    const newChildren = tree.children.map((child) =>
      editTreeItem(child, itemId, newItem)
    );
    return { ...tree, children: newChildren };
  }

  return tree;
};

export const removeTreeItem = (tree, itemId) => {
  if (tree.id === itemId) {
    return null;
  }

  if (tree.children) {
    const newChildren = tree.children
      .map((child) => removeTreeItem(child, itemId))
      .filter((child) => child !== null);
    return { ...tree, children: newChildren };
  }

  return tree;
};

export const addChildToTreeItem = (tree, itemId, newChild) => {
  if (tree.id === itemId) {
    const newChildren = tree.children ? [...tree.children, newChild] : [newChild];
    return { ...tree, children: newChildren };
  }

  if (tree.children) {
    const newChildren = tree.children.map((child) =>
      addChildToTreeItem(child, itemId, newChild)
    );
    return { ...tree, children: newChildren };
  }

  return tree;
};
