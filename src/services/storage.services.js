// export const HEROES_KEY = 'heroes';
//
//
// const listeners = {
//     [HEROES_KEY]: [],
// };
//
// function dispatcher(e) {
//     const { key, newValue } = e;
//     if (listeners[key] == null || !listeners[key].length) return;
//     let val;
//     try {
//         val = JSON.parse(newValue);
//     } catch (err) {
//         val = newValue;
//     }
//     listeners[key].forEach((func) => func(val));
// }
// window.addEventListener('storage', dispatcher);
//
// export const Storage = {
//     addListener(key, func) {
//         if (listeners[key] == null) return;
//         listeners[key].push(func);
//     },
//     getUser() {
//         try {
//             return JSON.parse(localStorage.getItem(HEROES_KEY));
//
//         } catch (e) {
//             return null;
//         }
//     },
//     getUserId(heroes = null) {
//         if (heroes != null) return heroes;
//         const u = this.getUser();
//         return u != null ? u.id : null;
//     },
//     setUser(heroes) {
//         localStorage.setItem(HEROES_KEY, JSON.stringify(heroes));
//     },
//     removeUser() {
//         localStorage.removeItem(HEROES_KEY);
//     },
//
// };
// export default Storage;
