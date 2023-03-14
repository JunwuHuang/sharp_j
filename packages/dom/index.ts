/**
 * 获取DOM元素距离根节点顶部的距离
 * @description 累加目标节点距离根几点的每一层级的offsetTop
 * @param element DOM元素
 */
export function getOfftopFromRoot(element?: HTMLElement | null): number {
  if (!element) {
    return 0;
  }
  let head: HTMLElement | Element | null = element;
  let top = 0;
  while (head && "offsetTop" in head) {
    top += head.offsetTop;
    head = head.offsetParent;
  }
  return top;
}

/**
 * 自动判断入参类型并返回目标节点
 * @param element 字符串或DOM节点
 * @returns DOM节点
 */
export function getElement(
  element?: HTMLElement | null | string
): HTMLElement | null {
  if (!element) {
    return null;
  }
  if (typeof element !== "string") {
    return element;
  }
  return document.getElementById(element) ?? document.querySelector(element);
}
