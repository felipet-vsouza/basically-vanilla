import Vue from 'vue';

export default class VueApp {

    static get() {
        return VueApp.instance || (VueApp.instance = VueApp.instantiateApp());
    }

    static instantiateApp() {
        return new Vue({
            el: '#app-container>h1',
            data: {
                ViewComponent: {
                    render: h => h('div', 'Loading app...')
                }
            },
            render(h) {
                return h(this.ViewComponent)
            },

        });
    }
}