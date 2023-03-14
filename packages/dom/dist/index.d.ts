/**
 * 获取DOM元素距离根节点顶部的距离
 * @description 累加目标节点距离根几点的每一层级的offsetTop
 * @param element DOM元素
 */
declare function getOfftopFromRoot(element?: HTMLElement | null): number;

export { getOfftopFromRoot };
