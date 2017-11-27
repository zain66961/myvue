/**
 *  路由异步，汇总
 *  设置同一个菜单的路由组件都打包在同个异步块中
 *  目的是为了让路由index文件代码简洁 
 */

//主界面
const main = () => import('@/components/Main.vue');
//首页
const home = () => import('@/components/home/Home.vue');
//分类
const explorer = () => import('@/components/explorer/Explorer.vue');
//购物车
const cart = () => import('@/components/cart/Cart.vue');
//我的
const me = () => import('@/components/me/Me.vue');

export {
    main,
    home,
    cart,
    explorer,
    me
}